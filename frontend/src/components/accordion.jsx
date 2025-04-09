import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What is the Real-Time Community Alert System?",
    answer: "The Real-Time Community Alert System is a platform designed to keep community members informed about important events, emergencies, and safety concerns in their area. It provides instant notifications for critical alerts, allowing residents to stay informed and take necessary precautions."
  },
  {
    question: "How do I sign up for alerts?",
    answer: "To sign up for alerts, click the 'Sign Up for Alerts' button on our homepage. You'll be asked to provide your contact information and select your preferred notification methods (e.g., email, SMS, push notifications). Once registered, you'll start receiving alerts relevant to your area."
  },
  {
    question: "Can I customize the types of alerts I receive?",
    answer: "Yes, you can customize your alert preferences. After signing up, you'll have access to a dashboard where you can select the types of alerts you want to receive. This includes options for severe weather warnings, traffic updates, community events, and more."
  },
  {
    question: "Is the alert system available in my area?",
    answer: "Our alert system is expanding to cover more areas. To check if it's available in your location, enter your zip code or city name on our coverage page. If we're not in your area yet, you can sign up to be notified when we expand to your region."
  },
  {
    question: "How quickly are alerts sent out?",
    answer: "Our system is designed to send out alerts as quickly as possible. For critical emergencies, alerts are typically sent within minutes of verification. For non-emergency updates, the timing may vary but is usually within an hour of the event or information being confirmed."
  },
  {
    question: "Can I report an incident or suggest an alert?",
    answer: "Yes, we encourage community participation. Registered users can submit incident reports or alert suggestions through our mobile app or website. These reports are quickly reviewed by our team and, if verified, sent out as alerts to the relevant community members."
  }
]

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 overflow-hidden">
      <button
        className="w-full text-left py-6 px-8 focus:outline-none bg-white hover:bg-gray-50 transition-colors duration-200"
        onClick={onClick}
      >
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg text-gray-800">{question}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-6 h-6 text-blue-500" />
          </motion.div>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 px-8 bg-gray-50">
              <p className="text-gray-600">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}