'use client'

import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { motion } from 'framer-motion'

import AppBar from '@components/components/molecules/AppBar'
import Footer from '@components/components/molecules/Footer'
import Sidebar from '@components/components/Sidebar'
import RightSidebar from '@components/components/RightSidebar'
import { H1, Button, Paragraph, ListGrid } from '@components/components/atoms'
import SectionTitle from '@components/components/molecules/SectionTitle'
import { Accordion, ContentPanel } from '@components/components/molecules/Accordion'
import Modal from '@components/components/molecules/Modal'
import BookGrid from '@components/components/molecules/BookGrid'
import ProfileImage from '@components/components/molecules/ProfileImage'
import LoadingGauge from '@components/components/molecules/LoadingGauge'
import { FaGithub, FaSmileBeam, FaLaughWink } from 'react-icons/fa'
import { trackPageView, trackEvent } from '@utils/analytics'
import * as outlineIcons from '@heroicons/react/24/outline'
import TechItem from '@components/components/atoms/TecItem'

// images
import { getImageSrc, customLoader, isExportMode } from '@utils/imageUtils'

function splitHeadlineWithEffect(headline) {
  if (!headline.includes('\\')) {
    return headline // Return as-is if no special marker
  }

  const parts = headline.split('\\') // Split at the marker
  return (
    <>
      {parts[0]}
      <span className="relative inline-block">
        <span className="relative z-10">{parts[1]}</span>
        <svg
          className="absolute -bottom-1 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-4/5 sm:w-full h-6 z-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 10"
        >
          <path
            d="M10 5 H90"
            stroke="#FFD700"
            strokeWidth="10"
            fill="none"
            strokeDasharray="80"
            strokeDashoffset="80"
            className="doodle-path"
          />
        </svg>
      </span>
    </>
  )
}

function Home() {
  const [heroData, setHeroData] = useState(null)
  const [aboutData, setAboutData] = useState(null)
  const [experienceData, setExperienceData] = useState(null)
  const [nowData, setNowData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState(0)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [notification, setNotification] = useState('')
  const [isLoadingModal, setIsLoadingModal] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)

  const isExportMode = process.env.NEXT_PUBLIC_EXPORT_MODE === 'true'

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const handleSubmit = async () => {
    if (!email || !message) {
      setNotification({ type: 'error', message: 'Please fill in all fields.' })
      return
    }
    setIsLoadingModal(true) // Indicate loading process
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      })
      const data = await response.json()
      if (response.ok) {
        handleSuccessNotification('Message sent successfully. Thank you!')
      } else {
        throw new Error(data.message || 'Failed to send the message')
      }
    } catch (error) {
      setNotification({ type: 'error', message: error.toString() })
    } finally {
      setIsLoadingModal(false) // Turn off loading indication
    }
  }

  const handleSuccessNotification = (message) => {
    setNotification({ type: 'success', message })
    setTimeout(() => {
      setNotification(null)
      setModalOpen(false)
      setEmail('')
      setMessage('')
    }, 5000)
  }

  const isElementInViewport = (element) => {
    if (!element) return false
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedData = null

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/staticData.json`
        )
        if (response.ok) {
          fetchedData = await response.json()
        } else {
          console.warn('Static data not found, attempting dynamic fetch...')
          throw new Error('Static data not found, attempting dynamic fetch...')
        }

        setHeroData(fetchedData.hero)
        setAboutData(fetchedData.about)
        setExperienceData(fetchedData.experience)
        setNowData(fetchedData.now)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error.message)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [isExportMode])

  useEffect(() => {
    trackPageView('/')

    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'now']
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element && isElementInViewport(element)) {
          trackEvent('scroll', 'section_view', section)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isLoading || !heroData) {
    return <LoadingGauge />
  }

  return (
    <div className="flex flex-col min-h-screen bg-white pt-16">
      <AppBar>
        <AppBar.Logo imgSrc="/img/dev_sparx_logo.png" />

        <AppBar.Menu>
          <AppBar.MenuItem href="#about">
            <span className="text-yellow-500 font-poppins-semi-bold mr-1">01.</span> <span className="font-poppins-semi-bold">About</span>
          </AppBar.MenuItem>
          <AppBar.MenuItem href="#experience">
            <span className="text-yellow-500 font-poppins-semi-bold mr-1">02.</span> <span className="font-poppins-semi-bold">Experience</span>
          </AppBar.MenuItem>
          <AppBar.MenuItem href="#now">
            <span className="text-yellow-500 font-poppins-semi-bold mr-1">03.</span> <span className="font-poppins-semi-bold">Now</span>
          </AppBar.MenuItem>
          <AppBar.MenuItem href="/blog/">
            <span className="text-yellow-500 font-poppins-semi-bold mr-1">04.</span> <span className="font-poppins-semi-bold">Blog</span>
          </AppBar.MenuItem>
          <AppBar.MenuItem>
            <a
              href="Nadav_CV_2025_Dev_and_Ent.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 font-poppins-semi-bold text-gray-700 py-1 px-4 rounded hover:bg-gray-700 hover:text-white transition"
            >
              Resume
            </a>
          </AppBar.MenuItem>
        </AppBar.Menu>
      </AppBar>

      <div className="flex flex-1 justify-center">
        <Sidebar />
        <main className="container">
          <motion.section
            id="hero"
            className="flex flex-col items-center sm:items-start justify-center min-h-screen px-6 sm:px-20 bg-gradient-to-b"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            {/* Greeting */}
            <p className="text-greeny-900 text-center sm:text-left">{heroData.greeting}</p>

            {/* Full Name */}
            <h1 className="font-poppins-semi-bold text-yellow-500 text-4xl sm:text-6xl mt-2 text-center sm:text-left">
              {heroData.fullName}
            </h1>

            {/* Headline with Effect */}
            <h2 className="font-poppins-semi-bold text-greeny-900 text-3xl sm:text-6xl mt-2 whitespace-pre-line text-center sm:text-left relative">
              {splitHeadlineWithEffect(heroData.headline)}
            </h2>

            {/* Description */}
            <div className="mt-6 sm:w-4/6 lg:w-3/6 mx-auto sm:mx-0">
              <Paragraph
                markDefs={heroData.description.markDefs}
                boldClassName="font-poppins-semi-bold text-yellow-500"
                className="text-center sm:text-left"
              >
                {heroData.description.children}
              </Paragraph>
            </div>

            {/* Call-to-Action */}
            <div className="mt-6 flex justify-center sm:justify-start">
              <Button onClick={() => setModalOpen(true)} className="text-white bg-blue-500">
                {heroData.cta.title}
              </Button>
              <Modal
                isOpen={isModalOpen}
                onClose={() => {
                  setModalOpen(false)
                  setNotification(null)
                }}
                title="Contact Form"
                onPrimaryAction={handleSubmit}
                primaryActionText="Send"
                secondaryActionText="Cancel"
                isLoading={isLoadingModal}
              >
                {notification && notification.type === 'success' ? (
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    <FaSmileBeam className="text-primary-500 text-6xl mb-3" />
                    <p className="text-xl font-semibold px-4">{notification.message}</p>
                  </div>
                ) : (
                  <form className="space-y-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mt-4"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                    {notification && notification.type === 'error' && (
                      <p className="text-red-500 text-sm mt-2">{notification.message}</p>
                    )}
                  </form>
                )}
              </Modal>
            </div>

            {/* Spacer */}
            <div className="md:col-span-12 min-h-[5rem]"></div>
          </motion.section>

          {/* About Section */}
          <motion.section
            id="about"
            className="grid grid-cols-1 lg:grid-cols-12 gap-4 justify-center min-h-[100vh] lg:min-h-[70vh] px-6 sm:px-20 scroll-mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="hidden lg:block lg:col-span-1"></div>
            <div className="flex flex-col items-start justify-start lg:col-span-7">
              <SectionTitle number={1} title="About Me" />
              <div className="pt-4 space-y-6">
                {aboutData.content.map((paragraph, paragraphIndex) => (
                  <div key={`about-paragraph-${paragraphIndex}`} className="text-gray-800">
                    {paragraph.children.map((child, childIndex) => {
                      if (child.marks?.includes('strong')) {
                        return (
                          <strong
                            key={`about-paragraph-${paragraphIndex}-strong-${childIndex}`}
                            className="text-yellow-500"
                          >
                            {child.text}
                          </strong>
                        )
                      }
                      return child.text
                    })}
                  </div>
                ))}
              </div>
              {/* Social Links Section */}
              <div className="mt-8 flex items-center space-x-6">
                {aboutData.socialLinks?.map((link, index) => (
                  <a
                    key={`about-social-link-${index}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 text-gray-700 hover:text-yellow-500 transition-all duration-300"
                  >
                    <FaGithub
                      size={24}
                      className="group-hover:rotate-12 transition-transform duration-300"
                    />
                    <span className="font-medium">My GitHub</span>
                  </a>
                ))}
              </div>
              {/* Technologies Section */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {aboutData.skills.map((skill) => (
                    <TechItem key={skill} skill={skill} />
                  ))}
                </div>
              </div>

            </div>
            {/* ProfileImage Container */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end items-start">
              <ProfileImage />
            </div>

            {/* Spacer */}
            <div className="md:col-span-12 flex-grow min-h-[5rem]"></div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            id="experience"
            className="grid grid-cols-1 md:grid-cols-12 gap-4 min-h-[100vh] lg:min-h-[60vh] px-6 sm:px-20 scroll-mt-16 content-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            {/* Section Title */}
            <div className="hidden md:block md:col-span-3"></div>
            <div className="sm:col-span-9">
              <SectionTitle number={2} title="Experience" />
            </div>

            {/* Mobile Dropdown Picker */}
            <div className="block sm:hidden w-full my-4">
              <div className="relative">
                <select
                  className="w-full p-2 pr-12 text-lg font-semibold text-primary-900 border-2 border-gray-300 rounded-lg shadow-md appearance-none"
                  value={activeTab}
                  onChange={(e) => setActiveTab(parseInt(e.target.value, 10))}
                >
                  {experienceData.content.map((job, index) => (
                    <option key={job.id || `sml_p_${job.company}-${index}`} value={index}>
                      {job.company}
                    </option>
                  ))}
                </select>
                {/* Custom Dropdown Arrow */}
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6 text-primary-900"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Side Tab Picker for larger screens */}
            <div className="hidden md:block md:col-span-3"></div>
            <div className="hidden sm:block sm:col-span-3">
              <div className="space-y-6">
                {experienceData.content.map((job, index) => (
                  <button
                    key={job.id || `lrg_p_${job.company}-${index}`}
                    className={`w-full text-left py-4 pl-4 pr-2 font-semibold text-primary-800 transition-all duration-300 ${activeTab === index
                      ? 'border-l-4 border-yellow-500 text-yellow-500'
                      : 'hover:text-yellow-500'
                      }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {job.company}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Content */}
            <div className="md:col-span-6">
              {experienceData.content.map((job, index) => (
                <div
                  key={job.id || `exp_c_${job.company}-${index}`}
                  className={`transition-opacity duration-300 ${activeTab === index ? 'block opacity-100' : 'hidden opacity-0'
                    }`}
                >
                  {/* Company Name and Years */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-primary-900">{job.title}</h3>
                    {/* Job Title */}
                    <p className="text-xl font-semibold text-yellow-500">{job.jobTitle}</p>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-4">
                    {job.achievements.map((achievement, idx) => (
                      <li
                        key={`${job.company}-achievement-${idx}`}
                        className="flex items-start space-x-2"
                      >
                        {/* Triangle Icon - Rotated */}
                        <div className="text-yellow-500 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 rotate-90"
                          >
                            <polygon points="12,2 2,22 22,22" />
                          </svg>
                        </div>
                        <span className="text-primary-900 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Spacer */}
            <div className="md:col-span-12 flex-grow min-h-[5rem]"></div>
          </motion.section>

          {/* Now Section */}
          <motion.section
            id="now"
            className="grid grid-cols-1 md:grid-cols-12 gap-4 min-h-[75vh] px-6 sm:px-20 scroll-mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="hidden md:block md:col-span-1"></div>
            <div className="flex flex-col items-start justify-start md:col-span-9">
              <SectionTitle number={3} title="Now" />
              {nowData?.content.map((item, index) => {
                if (item._type === 'paragraph') {
                  return (
                    <Paragraph key={`about-paragraph-${index}`} markDefs={item?.markDefs}>
                      {item.children}
                    </Paragraph>
                  )
                } else if (item._type === 'grid') {
                  return <BookGrid key={index} items={item.items} />
                }
                return null
              })}
            </div>
            <div className="hidden md:block md:col-span-1"></div>

            {/* Spacer */}
            <div className="md:col-span-12 flex-grow min-h-[5rem]"></div>
          </motion.section>
        </main>
        <RightSidebar />
      </div>
      <Footer />
    </div >
  )
}

export default Home
