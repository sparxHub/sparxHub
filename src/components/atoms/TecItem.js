import React from 'react'
import PropTypes from 'prop-types'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiVueDotjs,
  SiNodeDotjs,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiAmazonaws,
  SiMongodb,
  SiRedis,
  SiRabbitmq,
  SiSwagger,
  SiJsonwebtokens,
  SiMicroservices,
  SiFlutter,
  SiSwift,
  SiObjectivec,
  SiPython,
  SiMysql,
  SiGraphql,
  SiKubernetes,
  SiGithubactions,
  SiSocketdotio,
} from 'react-icons/si'

// Create a safer version of techMap with icon existence check
const techMap = {
  TypeScript: { icon: SiTypescript || HiOutlineQuestionMarkCircle, color: 'bg-blue-500', textColor: 'text-white' },
  JavaScript: { icon: SiJavascript || HiOutlineQuestionMarkCircle, color: 'bg-yellow-400', textColor: 'text-black' },
  'React.js': { icon: SiReact || HiOutlineQuestionMarkCircle, color: 'bg-sky-400', textColor: 'text-white' },
  'Vue.js': { icon: SiVueDotjs || HiOutlineQuestionMarkCircle, color: 'bg-green-500', textColor: 'text-white' },
  'Node.js': { icon: SiNodeDotjs || HiOutlineQuestionMarkCircle, color: 'bg-green-600', textColor: 'text-white' },
  'Express.js': { icon: SiExpress || HiOutlineQuestionMarkCircle, color: 'bg-gray-700', textColor: 'text-white' },
  'Next.js': { icon: SiNextdotjs || HiOutlineQuestionMarkCircle, color: 'bg-black', textColor: 'text-white' },
  'Tailwind CSS': { icon: SiTailwindcss || HiOutlineQuestionMarkCircle, color: 'bg-teal-400', textColor: 'text-white' },
  Docker: { icon: SiDocker || HiOutlineQuestionMarkCircle, color: 'bg-blue-600', textColor: 'text-white' },
  AWS: { icon: SiAmazonaws || HiOutlineQuestionMarkCircle, color: 'bg-orange-400', textColor: 'text-white' },
  MongoDB: { icon: SiMongodb || HiOutlineQuestionMarkCircle, color: 'bg-green-700', textColor: 'text-white' },
  Redis: { icon: SiRedis || HiOutlineQuestionMarkCircle, color: 'bg-red-500', textColor: 'text-white' },
  RabbitMQ: { icon: SiRabbitmq || HiOutlineQuestionMarkCircle, color: 'bg-orange-500', textColor: 'text-white' },
  'REST APIs': { icon: SiSwagger || HiOutlineQuestionMarkCircle, color: 'bg-gray-800', textColor: 'text-white' },
  OAuth: { icon: SiSwagger || HiOutlineQuestionMarkCircle, color: 'bg-purple-500', textColor: 'text-white' },
  JWT: { icon: SiJsonwebtokens || HiOutlineQuestionMarkCircle, color: 'bg-pink-500', textColor: 'text-white' },
  Microservices: { icon: SiMicroservices || HiOutlineQuestionMarkCircle, color: 'bg-blue-700', textColor: 'text-white' },
  Flutter: { icon: SiFlutter || HiOutlineQuestionMarkCircle, color: 'bg-sky-500', textColor: 'text-white' },
  Swift: { icon: SiSwift || HiOutlineQuestionMarkCircle, color: 'bg-orange-500', textColor: 'text-white' },
  'Objective-C': { icon: SiObjectivec || HiOutlineQuestionMarkCircle, color: 'bg-gray-600', textColor: 'text-white' },
  Python: { icon: SiPython || HiOutlineQuestionMarkCircle, color: 'bg-yellow-400', textColor: 'text-black' },
  MySQL: { icon: SiMysql || HiOutlineQuestionMarkCircle, color: 'bg-blue-700', textColor: 'text-white' },
  GraphQL: { icon: SiGraphql || HiOutlineQuestionMarkCircle, color: 'bg-pink-500', textColor: 'text-white' },
  Kubernetes: { icon: SiKubernetes || HiOutlineQuestionMarkCircle, color: 'bg-blue-700', textColor: 'text-white' },
  'GitHub Actions': { icon: SiGithubactions || HiOutlineQuestionMarkCircle, color: 'bg-gray-800', textColor: 'text-white' },
  WebSockets: { icon: SiSocketdotio || HiOutlineQuestionMarkCircle, color: 'bg-purple-600', textColor: 'text-white' },
}

function TecItem({ skill }) {
  // First check if the skill exists in techMap
  const techInfo = techMap[skill];

  // Use default values if the skill is not found in techMap
  const { icon: Icon, color, textColor } = techInfo || {
    icon: HiOutlineQuestionMarkCircle,
    color: "bg-gray-400",
    textColor: "text-white"
  };

  // Additional safety check - if Icon is undefined for any reason, use the default
  const SafeIcon = Icon || HiOutlineQuestionMarkCircle;

  return (
    <div
      className={`relative flex items-center justify-center space-x-2 pl-4 pr-6 py-2 skew-x-[-15deg] ${color}`}
    >
      <SafeIcon className={`w-5 h-5 ${textColor}`} />
      <span className={`text-sm font-medium ${textColor} skew-x-[15deg]`}>{skill}</span>
    </div>
  );
}

TecItem.propTypes = {
  skill: PropTypes.string.isRequired
}

export default TecItem