// Modal.js
'use client'

import React from 'react'
import ReactDOM from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { H3, Button } from '@components/components/atoms'

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const modalContentVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

function Modal({
  isOpen,
  onClose,
  title,
  children,
  primaryActionText = 'Submit',
  secondaryActionText = 'Cancel',
  onPrimaryAction,
  onSecondaryAction = onClose,
  primaryButtonVariant = 'normal',
  secondaryButtonVariant = 'text',
  isLoading = false, // Added to control button disabled state
}) {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl max-w-md w-full m-4 p-6"
            variants={modalContentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <H3>{title}</H3>
            <div className="mb-4">{children}</div>
            <div className="flex justify-end space-x-2">
              <Button
                onClick={onSecondaryAction}
                variant={secondaryButtonVariant}
                colorSet="secondary"
                disabled={isLoading} // Pass isLoading to disable button
              >
                {secondaryActionText}
              </Button>
              <Button
                onClick={onPrimaryAction}
                variant={primaryButtonVariant}
                colorSet="primary"
                disabled={isLoading} // Pass isLoading to disable button
              >
                {primaryActionText}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default Modal
