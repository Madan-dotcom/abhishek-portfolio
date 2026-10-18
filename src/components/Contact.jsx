import { useState } from "react";

const CONTACT_EMAIL = "Prworks30@gmail.com";
const WHATSAPP_NUMBER = "918088353822";

export default function Contact() {
   const [form, setForm] = useState({
      name: "",
      email: "",
      projectType: "",
      message: "",
   });

   const [showOptions, setShowOptions] = useState(false);

   const updateField = (event) => {
      const { name, value } = event.target;

      setForm((previous) => ({
         ...previous,
         [name]: value,
      }));
   };

   const getInquiry = () =>
      `
Hello Abhishek,

I'd like to discuss a video editing project.

Name: ${form.name}
Email: ${form.email}
Project Type: ${form.projectType}

Project Details:
${form.message}

Looking forward to hearing from you.
  `.trim();

   const handleSubmit = (event) => {
      event.preventDefault();
      setShowOptions(true);
   };

   const sendEmail = () => {
      const subject = `Project Inquiry - ${form.projectType}`;

      const mailtoUrl = `mailto:${CONTACT_EMAIL}` + `?subject=${encodeURIComponent(subject)}` + `&body=${encodeURIComponent(getInquiry())}`;

      window.location.href = mailtoUrl;
      setShowOptions(false);
   };

   const sendWhatsApp = () => {
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}` + `?text=${encodeURIComponent(getInquiry())}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setShowOptions(false);
   };

   return (
      <section id='contact' className='relative overflow-hidden bg-[#0C0C0C] px-6 py-20 text-[#F0EDE6] sm:px-10 sm:py-24 lg:px-7'>
         <div className='mx-auto grid max-w-[1600px] grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-20'>
            {/* LEFT: INTRODUCTION AND CONTACT DETAILS */}
            <div>
               <div className='mb-10 flex flex-col items-start'>
                  <div className='mb-7 flex flex-col items-center'>
                     <div className='h-9 w-9 rounded-full border border-[#D8B66A]/50' />
                     <div className='mt-1.5 h-2.5 w-2.5 rounded-full bg-[#D8B66A]' />
                  </div>

                  <p className='text-[10px] uppercase tracking-[0.3em] text-[#D8B66A]'>GET IN TOUCH</p>
               </div>

               <h2 className='max-w-lg font-serif text-5xl font-bold leading-[0.98] sm:text-6xl lg:text-[72px]'>
                  Let's Make
                  <span className='block italic text-[#D8B66A]'>Something</span>
                  <span className='block italic text-[#D8B66A]'>Great.</span>
               </h2>

               <p className='mt-6 max-w-md text-sm leading-7 text-white/55'>
                  Have a project in mind? I'd love to hear about it. Drop a message and I'll get back to you.
               </p>

               <div className='mt-10 max-w-lg'>
                  <a
                     href={`mailto:${CONTACT_EMAIL}`}
                     className='flex items-center gap-4 border-b border-white/10 py-4 text-xs tracking-[0.12em] text-white/55 transition-colors hover:text-[#D8B66A]'
                  >
                     <span className='flex h-8 w-8 items-center justify-center border border-white/10'>
                        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.4' className='h-4 w-4' aria-hidden='true'>
                           <rect x='3' y='5' width='18' height='14' rx='1' />
                           <path d='m3 6 9 7 9-7' />
                        </svg>
                     </span>
                     {CONTACT_EMAIL}
                  </a>

                  <a
                     href={`https://wa.me/${WHATSAPP_NUMBER}`}
                     target='_blank'
                     rel='noreferrer'
                     className='flex items-center gap-4 border-b border-white/10 py-4 text-xs tracking-[0.12em] text-white/55 transition-colors hover:text-[#D8B66A]'
                  >
                     <span className='flex h-8 w-8 items-center justify-center border border-white/10'>
                        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.4' className='h-4 w-4' aria-hidden='true'>
                           <path d='M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.2A8.4 8.4 0 1 1 21 11.5Z' />
                           <path d='M9 8.5c.4 2.3 2.2 4.1 4.5 4.5' />
                        </svg>
                     </span>
                     WhatsApp
                     <span className='ml-auto text-[10px]'>↗</span>
                  </a>

                  <a
                     href='https://www.instagram.com/abhishek.edits'
                     target='_blank'
                     rel='noreferrer'
                     className='flex items-center gap-4 border-b border-white/10 py-4 text-xs tracking-[0.12em] text-white/55 transition-colors hover:text-[#D8B66A]'
                  >
                     <span className='flex h-8 w-8 items-center justify-center border border-white/10'>IG</span>
                     @abhishek.edits
                     <span className='ml-auto text-[10px]'> coming soon↗</span>
                  </a>
                  <a
                     href='https://www.linkedin.com/in/abhishek-n-s-061b15384/'
                     target='_blank'
                     rel='noreferrer'
                     className='flex items-center gap-4 border-b border-white/10 py-4 text-xs tracking-[0.12em] text-white/55 transition-colors hover:text-[#D8B66A]'
                  >
                     <span className='flex h-8 w-8 items-center justify-center border border-white/10'>I</span>
                     LinkedIn
                     <span className='ml-auto text-[10px]'>↗</span>
                  </a>
               </div>
            </div>

            {/* RIGHT: CONTACT FORM */}
            <div className='flex items-start pt-2 lg:pt-36'>
               <form onSubmit={handleSubmit} className='w-full space-y-5'>
                  <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
                     <div>
                        <label htmlFor='contact-name' className='mb-2 block text-[9px] uppercase tracking-[0.2em] text-white/50'>
                           YOUR NAME
                        </label>

                        <input
                           id='contact-name'
                           name='name'
                           type='text'
                           autoComplete='name'
                           placeholder='e.g. Priya Sharma'
                           value={form.name}
                           onChange={updateField}
                           required
                           className='w-full border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#D8B66A]/60'
                        />
                     </div>

                     <div>
                        <label htmlFor='contact-email' className='mb-2 block text-[9px] uppercase tracking-[0.2em] text-white/50'>
                           EMAIL
                        </label>

                        <input
                           id='contact-email'
                           name='email'
                           type='email'
                           autoComplete='email'
                           placeholder='you@email.com'
                           value={form.email}
                           onChange={updateField}
                           required
                           className='w-full border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#D8B66A]/60'
                        />
                     </div>
                  </div>

                  <div>
                     <label htmlFor='project-type' className='mb-2 block text-[9px] uppercase tracking-[0.2em] text-white/50'>
                        PROJECT TYPE
                     </label>

                     <select
                        id='project-type'
                        name='projectType'
                        value={form.projectType}
                        onChange={updateField}
                        required
                        className='w-full border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#D8B66A]/60'
                     >
                        <option value='' disabled>
                           Select a project type
                        </option>
                        <option value='Brand Film'>Brand Film</option>
                        <option value='Commercial'>Commercial</option>
                        <option value='Music Video'>Music Video</option>
                        <option value='Documentary'>Documentary</option>
                        <option value='Social Content'>Social Content</option>
                        <option value='Wedding Film'>Wedding Film</option>
                        <option value='Other'>Other</option>
                     </select>
                  </div>

                  <div>
                     <label htmlFor='project-message' className='mb-2 block text-[9px] uppercase tracking-[0.2em] text-white/50'>
                        TELL ME ABOUT YOUR PROJECT
                     </label>

                     <textarea
                        id='project-message'
                        name='message'
                        rows={5}
                        placeholder='Briefly describe your vision, timeline, and budget...'
                        value={form.message}
                        onChange={updateField}
                        required
                        className='w-full resize-y border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#D8B66A]/60'
                     />
                  </div>

                  <button
                     type='submit'
                     className='inline-flex min-h-[46px] items-center gap-3 bg-[#D8B66A] px-9 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-[#F0D58D]'
                  >
                     SEND MESSAGE
                     <span aria-hidden='true'>→</span>
                  </button>
               </form>
            </div>
         </div>

         {/* EMAIL / WHATSAPP CHOICE DIALOG */}
         {showOptions && (
            <div
               className='fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-5 py-8 backdrop-blur-sm'
               onMouseDown={(event) => {
                  if (event.target === event.currentTarget) {
                     setShowOptions(false);
                  }
               }}
            >
               <div
                  role='dialog'
                  aria-modal='true'
                  aria-labelledby='contact-dialog-title'
                  className='relative w-full max-w-md border border-[#D8B66A]/30 bg-[#101010] p-6 shadow-2xl sm:p-8'
               >
                  <button
                     type='button'
                     onClick={() => setShowOptions(false)}
                     aria-label='Close dialog'
                     className='absolute right-4 top-4 text-xl text-white/50 transition-colors hover:text-[#D8B66A]'
                  >
                     ×
                  </button>

                  <p className='mb-3 text-[9px] uppercase tracking-[0.25em] text-[#D8B66A]'>ONE LAST STEP</p>

                  <h3 id='contact-dialog-title' className='font-serif text-3xl text-[#F0EDE6]'>
                     Let's talk<span className='italic text-[#D8B66A]'>.</span>
                  </h3>

                  <p className='mt-3 text-sm leading-6 text-white/50'>
                     Choose how you'd like to send your project inquiry. Your details will be included automatically.
                  </p>

                  <button
                     type='button'
                     onClick={sendEmail}
                     className='mt-7 flex w-full items-center gap-4 border border-white/10 p-4 text-left transition-colors hover:border-[#D8B66A]/60 hover:bg-white/[0.03]'
                  >
                     <span className='flex h-10 w-10 items-center justify-center border border-[#D8B66A]/30 text-[#D8B66A]'>✉</span>
                     <span className='flex-1'>
                        <span className='block text-sm text-[#F0EDE6]'>Send via Email</span>
                        <span className='mt-1 block break-all text-xs text-white/40'>{CONTACT_EMAIL}</span>
                     </span>
                     <span className='text-[#D8B66A]'>↗</span>
                  </button>

                  <button
                     type='button'
                     onClick={sendWhatsApp}
                     className='mt-3 flex w-full items-center gap-4 border border-white/10 p-4 text-left transition-colors hover:border-[#D8B66A]/60 hover:bg-white/[0.03]'
                  >
                     <span className='flex h-10 w-10 items-center justify-center border border-[#D8B66A]/30 text-[#D8B66A]'>
                        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' className='h-5 w-5' aria-hidden='true'>
                           <path d='M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.2A8.4 8.4 0 1 1 21 11.5Z' />
                           <path d='M9 8.5c.4 2.3 2.2 4.1 4.5 4.5' />
                        </svg>
                     </span>
                     <span className='flex-1'>
                        <span className='block text-sm text-[#F0EDE6]'>Send via WhatsApp</span>
                        <span className='mt-1 block text-xs text-white/40'>Open a prefilled WhatsApp message</span>
                     </span>
                     <span className='text-[#D8B66A]'>↗</span>
                  </button>

                  <p className='mt-5 text-[10px] leading-5 text-white/30'>
                     Your message will open in the selected app. Please press Send there to complete your inquiry.
                  </p>
               </div>
            </div>
         )}
      </section>
   );
}
