// import React, { useRef, useState } from 'react'
// import emailjs from '@emailjs/browser';
// function Contact() {
//   const formRef = useRef()
//   const service_id = 'service_94oqh7k';
//   const template_id = 'template_bv34m0p';
//   const [loading,setLoading] = useState(false)

//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     message: ''
//   })

//   const handleChange = ({ target: { name, value } }) => {
//     setForm({ ...form, [name]: value });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await emailjs.send(
//         service_id,
//         template_id,

//         {
//           from_name: form.name,
//           to_name: 'Farhan Ahmed Tamkin',
//           from_email: form.email,
//           to_email: 'farhan.ahmed.tamkin@gmail.com',
//           message: form.message,
//         }
//       );
//       setLoading(false)
//       alert('Thank you for your message 😃');
//     } catch (error) {
//       setLoading(false)
//       console.log(error)
//       alert("I didn't receive your message 😢")
//     }
    
//   }
//   return (
//     <section className="c-space my-20">
//       <div className="relative min-h-screen flex items-center justify-center flex-col">
//         {/* <img
//           src="/assets/terminal.png"
//           alt="terminal-bg"
//           className="absolute inset-0 min-h-screen"
//         /> */}

//         <div className="contact-container">
//           <h3 className="head-text">Let's talk</h3>
//           <p className="text-lg text-white-600 mt-3">
//             Whether you’re looking to build a new website, improve your existing
//             platform, or bring a unique project to life, I’m here to help
//           </p>

//           <form
//             ref={formRef}
//             onSubmit={handleSubmit}
//             className="mt-12 flex flex-col space-y-7"
//           >
//             <label className="space-y-3">
//               <span className="field-label">Full Name</span>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 className="field-input"
//                 placeholder="Jon Do"
//               ></input>
//             </label>
//             <label className="space-y-3">
//               <span className="field-label">Email</span>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 className="field-input"
//                 placeholder="JonDo@gmail.com"
//               ></input>
//             </label>
//             <label className="space-y-3">
//               <span className="field-label">Your Message</span>
//               <textarea
//                 name="message"
//                 value={form.essage}
//                 onChange={handleChange}
//                 required
//                 rows={5}
//                 className="field-input"
//                 placeholder="Hi, I'm interested in..."
//               ></textarea>
//             </label>
//             <button className='field-btn' type='submit' disabled={loading}>
//               {loading ? 'Sending...' : 'Send Message'}
//               <img
//                 src="/assets/arrow-up.png"                 alt="arrow-up"                 className="field-btn_arrow"               />
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
function Contact() {
  const formRef = useRef()
  const service_id = 'service_94oqh7k';
  const template_id = 'template_bv34m0p';
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('');


  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setResult(''); // Optional: clear previous result

    // Prepare form data as FormData object
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);
    formData.append('access_key', '0160e2b6-1261-4a32-b9c9-4184f54657c8');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setLoading(false);

      if (data.success) {
        setResult('Success!');
        alert('Thank you for your message 😃');
        // Optional: reset form here if needed
        setForm({ name: '', email: '', message: '' });
      } else {
        setResult('Error');
        alert("I didn't receive your message 😢");
      }
    } catch (error) {
      setLoading(false);
      setResult('Error');
      alert("I didn't receive your message 😢");
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 rounded-[7px]"
        >
          <source src="/assets/hacking.mp4" type="video/mp4" />
        </video>

        <div className="contact-container">
          <div className="contact-container z-10"></div>
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Jon Do"
              ></input>
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="JonDo@gmail.com"
              ></input>
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.essage}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I'm interested in..."
              ></textarea>
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact


