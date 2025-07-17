import { MapPin, Phone, Mail, Clock, MessageCircle, Users, CreditCard, FileText, HeartPulse, Contact, PhoneOutgoing } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactForm  from '../components/ui/ContactForm';

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Futuristic Hero Section */}
      
      <div className="relative h-screen max-h-[600px] overflow-hidden">
                <img
          src="https://images.pexels.com/photos/6098034/pexels-photo-6098034.jpeg"
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
      
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 h-full flex flex-col justify-center px-6"
        >
          <div className="container mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Contact
              </span> Our Team
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-12">
              Experience healthcare communication reimagined with our seamless contact solutions
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all">
                Get in Touch →
              </button>
            </motion.div>
          </div>
        </motion.div>
        
      </div>

      {/* Floating 3D Contact Cards 
      <Section className="relative z-30 -mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Phone className="h-8 w-8" />,
              title: "Call Support",
              content: "323-999-APPL (2775)",
              bg: "bg-gradient-to-br from-blue-600 to-blue-500",
              delay: 0.2
            },
            {
              icon: <Mail className="h-8 w-8" />,
              title: "Email Us",
              content: "help@applespecialty.com",
              bg: "bg-gradient-to-br from-emerald-600 to-emerald-500",
              delay: 0.4
            },
            {
              icon: <MapPin className="h-8 w-8" />,
              title: "Visit Clinic",
              content: "1211 N. Broadway, Santa Ana",
              bg: "bg-gradient-to-br from-purple-600 to-purple-500",
              delay: 0.6
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: item.delay,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`${item.bg} text-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-style-preserve-3d`}
              style={{
                transformOrigin: 'top center',
                boxShadow: '0 32px 64px rgba(0,0,0,0.12)'
              }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-white/20 p-3 rounded-xl mr-4 backdrop-blur-sm">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
              <p className="text-lg opacity-90">{item.content}</p>
              <div className="mt-6">
                <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20 transition-all">
                  Learn more
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
*/}
      {/* Holographic Form Section */}
      <Section className="py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
                Digital
              </span> Communication Portal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced contact system ensures you get the right help from the right specialist
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  <Clock className="h-4 w-4 mr-2" />
                  Real-time Response
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Intelligent Contact Routing
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our AI-powered system directs your inquiry to the most qualified team member based on your needs and their expertise.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Users className="h-6 w-6" />, text: "Patient Advocates" },
                  { icon: <HeartPulse className="h-6 w-6" />, text: "Clinical Team" },
                  { icon: <CreditCard className="h-6 w-6" />, text: "Billing Experts" },
                  { icon: <FileText className="h-6 w-6" />, text: "RX Specialists" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                    <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <p className="font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-2xl opacity-20 blur-xl" />
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="p-1 bg-gradient-to-r from-blue-500 to-emerald-500" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Contact Form
                  </h3>
                  <p className="text-gray-500 mb-8">
                    Secure message delivery with 24-hour response guarantee
                  </p>
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Interactive 3D Map Section */}
      <Section className="py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">Facility</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art pharmacy and patient care center
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-2/3 w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <iframe
                title="Santa Ana Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.350906747846!2d-117.86830358479694!3d33.75506298068886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdfc8f74e50ed%3A0x1d6d648f1061f917!2s1211%20N%20Broadway%20%23300%2C%20Santa%20Ana%2C%20CA%2092701%2C%20USA!5e0!3m2!1sen!2seg!4v1718000000000!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </motion.div>

            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Facility Details</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-500 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-lg">Address</h4>
                      <p className="text-gray-700">1211 N. Broadway, Ste 300</p>
                      <p className="text-gray-700">Santa Ana, CA 92701</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-500 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-lg">Hours</h4>
                      <p className="text-gray-700"> Mon-Fri: 8:30 AM - 5:00 PM PST</p>
                      <p className="text-gray-700"></p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-500 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-lg">Contact</h4>
                      <p className="text-gray-700">Main: 323-999-APPL (2775)</p>
                      <p className="text-gray-700">Fax: 323-955-APPL (2775)</p>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white py-3 px-6 rounded-xl font-bold hover:shadow-lg transition-all">
                    Get Directions
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>


<Section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
  <div className="max-w-4xl mx-auto">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">Departments</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Direct access to our expert teams
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      <div className={`bg-gradient-to-r from-blue-500 to-emerald-500 h-2`} />
      <div className="p-6">
        
     <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
  {[
    { icon: <HeartPulse className="h-6 w-6" />, title: 'Patient Care' },
    { icon: <FileText className="h-6 w-6" />, title: 'Prescriptions' },
    { icon: <CreditCard className="h-6 w-6" />, title: 'Billing' },
    { icon: <Users className="h-6 w-6" />, title: 'Providers' },
    { icon: <MapPin className="h-6 w-6" />, title: 'Facility Tours' }, // 👈 now here
    { icon: <MessageCircle className="h-6 w-6" />, title: 'Clinical' },
    { icon: <Mail className="h-6 w-6" />, title: 'General Inquiries' },
  ].map((dept, idx) => (
    <div key={idx} className="flex flex-col items-center">
      <div className="bg-primary-100 p-3 rounded-lg text-primary-700 mb-2">
        {dept.icon}
      </div>
      <h3 className="text-sm font-medium text-gray-800 text-center">{dept.title}</h3>
    </div>
  ))}
</div>


        {/* Combined Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
          <div className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full shadow">
            <Phone className="h-5 w-5 text-primary-700" />
            <span className="font-medium text-primary-900">Phone: 323-999-APPL (2775)</span>
          </div>

          <div className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full shadow">
            <PhoneOutgoing className="h-5 w-5 text-primary-700" />
            <span className="font-medium text-primary-900">Fax: 323-955-APPL (2775)</span>
          </div>

          <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full shadow">
            <Mail className="h-5 w-5 text-blue-700" />
            <span className="font-medium text-blue-900 break-all">
              Requests@applespecilatypharmacy.com
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</Section>


      
    </div>
  );
};

// Reusable Section Component
const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`px-6 py-16 md:py-24 ${className}`}>
    <div className="container mx-auto">
      {children}
    </div>
  </section>
);

<ContactForm />
// Contact Form Component (simplified for example)
{/*
const ContactForm = () => (
  <form className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          placeholder="your@email.com"
        />
      </div>
    </div>
    <div>
      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
      <input
        type="text"
        id="subject"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        placeholder="How can we help?"
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
      <textarea
        id="message"
        rows={4}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        placeholder="Your message..."
      />
    </div>
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 px-6 rounded-lg font-bold hover:shadow-lg transition-all"
    >
      Send Message
    </button>
  </form>
);
*/}
export default ContactPage;