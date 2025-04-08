import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section id="contact" className="pt-12 pb-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-display font-bold mb-8 text-gray-900 dark:text-gray-100">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Have a question or want to work together?</p>
          <a 
            href="#" 
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white dark:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;