import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaClipboardList, FaChartBar, FaFileAlt, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

export default function RollCallerPortfolio() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <motion.h1
        className="text-4xl font-bold text-center text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        RollCaller: A Unified Attendance Solution
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        A project I worked on as an Assistant Product Manager during a product management bootcamp, collaborating with over 20 team members across Africa.
      </motion.p>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
        <p className="text-gray-700 mt-2">
        Hello! I'm Grace Kamau, a passionate problem-solver dedicated to using technology to revolutionize education. My commitment to bridging educational gaps started early—I’ve been a Sunday school teacher since high school, volunteered with Ushauri Hub to empower high school students, and led mentorship programs as a Community Club Planner. This deep-rooted passion for education and technology fueled my involvement in RollCaller, where I worked with a diverse team to create a solution that improves attendance tracking in African schools. I thrive in collaborative environments where technology meets impact, and I’m eager to bring this drive to innovative teams shaping the future of education.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">My Role</h2>
        <p className="text-gray-700 mt-2">
          As an Assistant Product Manager, I played a key role in coordinating the team, defining requirements, and ensuring smooth development and execution. I worked closely with designers, developers, and stakeholders to bring RollCaller to life.
        </p>
        <ul className="list-disc pl-5 text-gray-700 mt-2">
          <li>Designed the prototype in Figma.</li>
          <li>Led team meetings and ensured smooth communication.</li>
          <li>Distributed roles and stepped in when the lead PM was unavailable.</li>
        </ul>
      </section>
      
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FaClipboardList className="text-blue-500" /> Problem Statement
            </h2>
            <p className="text-gray-700">
              <strong>How Might We:</strong> How might we design a solution that verifies both online and offline attendance for educators while remaining accessible and user-friendly for students?
            </p>
            <h3 className="text-lg font-semibold mt-2">Key Challenges:</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Existing systems fail to integrate online and offline attendance records seamlessly.</li>
              <li>Teachers spend excessive time manually reconciling attendance, reducing focus on teaching.</li>
              <li>Limited accessibility for students and educators in regions with unreliable internet.</li>
              <li>Lack of real-time synchronization, leading to inefficiencies in data management.</li>
              <li>Security concerns with attendance data, increasing the risk of data loss or unauthorized access.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              🚀 Solution: RollCaller
            </h2>
            <p className="text-gray-700">
              RollCaller is a comprehensive attendance tracking solution designed to integrate online and offline learning environments. It ensures accuracy, reliability, and accessibility through:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li><strong>Automated Data Management:</strong> Unified QR code scanning and real-time data synchronization to reduce manual errors.</li>
              <li><strong>Multi-Platform Accessibility:</strong> Available as a mobile app and responsive web application with offline capabilities.</li>
              <li><strong>Seamless Integration:</strong> Robust API enabling connection with LMS, video conferencing apps, and institutional databases.</li>
              <li><strong>Advanced Monitoring:</strong> Real-time attendance tracking, customizable reports, and network interruption handling.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-4 text-center">
          <h2 className="text-xl font-semibold flex items-center justify-center gap-2">
            🎨 Figma Prototype
          </h2>
          <p className="text-gray-700">Explore the low-fidelity Figma prototype to see how RollCaller looks and functions.</p>
          <a href="https://www.figma.com/design/l8T5PF5gheL95w6VmdSBkr/Roll-Caller?node-id=0-1&t=IINWbLwtKzfXOyzv-1" target="_blank" rel="noopener noreferrer" className="mt-2 block text-blue-600 underline">View Prototype</a>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaFileAlt className="text-blue-500" /> PRD Document
          </h2>
          <p className="text-gray-700">View or download the Product Requirement Document (PRD) to understand the detailed specifications and planning behind RollCaller.</p>
          <a href="https://docs.google.com/document/d/12-pMv1Y0PVB3LzY60UpsT2zOCNWOSQdD9JcMfUzouYo/edit?usp=sharing" download className="mt-2 block text-blue-600 underline">Download PRD</a>
        </CardContent>
      </Card>

      <footer className="text-center text-gray-600 py-6 mt-10 border-t">
        <p>© 2025 Grace Kamau | Contact: <a href="mailto:gracekamau1909@gmail.com" className="text-blue-600 underline">gracekamau1909@gmail.com</a></p>
      </footer>
    </div>
  );
}
