import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sheikhtanjimahmedsoron@gmail.com',
    href: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new',
    color: 'bg-red-500/10 text-red-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 1783-854832',
    href: 'tel:+8801783854832',
    color: 'bg-green-500/10 text-green-500',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+880 1315-293532',
    href: 'https://wa.me/8801315293532',
    color: 'bg-emerald-500/10 text-emerald-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Rajshahi, Bangladesh',
    href: 'https://maps.google.com/?q=Rajshahi,Bangladesh',
    color: 'bg-blue-500/10 text-blue-500',
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    label: 'GitHub',
    username: '@tanjim079',
    href: 'https://github.com/tanjim079',
    color: 'hover:border-gray-900 dark:hover:border-white',
    iconColor: 'group-hover:text-gray-900 dark:group-hover:text-white',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    username: 'Sheikh Tanjim Ahmed',
    href: 'https://linkedin.com/in/sheikhtanjimahmed',
    color: 'hover:border-blue-600',
    iconColor: 'group-hover:text-blue-600',
  },
  {
    icon: FaFacebook,
    label: 'Facebook',
    username: 'Sheikh Tanjim Ahmed',
    href: 'https://www.facebook.com/sheikhtanjim.ahmed.7',
    color: 'hover:border-blue-500',
    iconColor: 'group-hover:text-blue-500',
  },
];

export default function Contact() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Feel free to reach out for collaborations, job opportunities, or just a friendly hello.
          I'm always happy to connect!
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="card flex items-center gap-5 group cursor-pointer"
            >
              <div className={`p-4 rounded-xl ${item.color} shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                <item.icon className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-0.5">{item.label}</p>
                <p className="text-gray-900 dark:text-white font-semibold truncate">{item.value}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        {/* Social Media */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Connect With Me</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Find me on social media</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`group flex flex-col items-center gap-3 p-6 bg-white dark:bg-dark-card border-2 border-gray-200 dark:border-slate-700 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${item.color}`}
            >
              <item.icon className={`w-10 h-10 text-gray-500 dark:text-gray-400 transition-colors duration-300 ${item.iconColor}`} />
              <div className="text-center">
                <p className="font-bold text-gray-900 dark:text-white">{item.label}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.username}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Direct Email CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Prefer Email?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
            Drop me an email directly and I'll get back to you as soon as possible.
          </p>
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Send an Email
          </a>
        </div>
      </div>
    </div>
  );
}
