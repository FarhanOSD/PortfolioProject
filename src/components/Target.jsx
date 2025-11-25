import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { Html } from '@react-three/drei'; // Add this import for 3D-positioned HTML
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Target(props) {
  const targetRef = useRef();
  const { scene } = useGLTF('/models/roboter_cute.glb');
  const [showText, setShowText] = useState(false); // State to toggle text visibility
  const greeting = "Hello!, Welcome to Farhan Ahmed Tamkin's portfolio"; // Customize the text here (matches the spoken greeting)

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  useEffect(() => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(greeting);
      utterance.pitch = 1.2;
      utterance.rate = 1;
      utterance.volume = 1;

      // Optional: Select voice
      speechSynthesis.getVoices().forEach(voice => {
        if (voice.name.includes('Google') || voice.name.includes('Microsoft')) {
          utterance.voice = voice;
        }
      });

      // Sync text display with speech events
      utterance.onstart = () => setShowText(true); // Show text when speaking starts
      utterance.onend = () => setShowText(false); // Hide text when speaking ends

      speechSynthesis.speak(utterance);
    } else {
      console.log('Text-to-speech not supported in this browser.');
    }
  }, []); // Runs only once on mount

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
      {showText && (
        <Html
          position={[0, 3, 0]} // Position above the model (adjust x/y/z as needed for your model's scale)
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontOpticalSizing:'auto',
            background: 'white', // Speech bubble style
            padding: '8px 12px',
            borderRadius: '20px',
            border: '2px solid black',
            fontSize: '16px',
            color: 'black',
            whiteSpace: 'nowrap', // Prevent wrapping
            pointerEvents: 'none', // Allow clicks to pass through
          }}
          center // Centers the HTML on the position
        >
          {greeting}
        </Html>
      )}
    </mesh>
  );
}

export default Target;

// import React, { useRef, useEffect } from 'react';
// import { useGLTF } from '@react-three/drei';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

// function Target(props) {
//   const targetRef = useRef();
//   const { scene } = useGLTF('/models/roboter_cute.glb');

//   useGSAP(() => {
//     gsap.to(targetRef.current.position, {
//       y: targetRef.current.position.y + 0.5,
//       duration: 1.5,
//       repeat: -1,
//       yoyo: true,
//     });
//   });

//   useEffect(() => {
//     // Trigger speech on component mount (page load)
//     if ('speechSynthesis' in window) {
//       const utterance = new SpeechSynthesisUtterance(
//         "Hello!,Welcome to Farhan Ahmed Tamkin's portfolio"
//       ); // Or 'Hi!' – customize the text here
//       utterance.pitch = 1.2; // Slightly higher pitch for a cute/robot feel (range: 0-2)
//       utterance.rate = 1; // Normal speed (range: 0.1-10)
//       utterance.volume = 1; // Full volume (range: 0-1)

//       // Optional: Select a specific voice (list available voices with speechSynthesis.getVoices())
//       speechSynthesis.getVoices().forEach(voice => {
//         if (voice.name.includes('Google') || voice.name.includes('Microsoft')) {
//           // Pick a clear voice
//           utterance.voice = voice;
//         }
//       });

//       speechSynthesis.speak(utterance);
//     } else {
//       console.log('Text-to-speech not supported in this browser.'); // Fallback: Could add a text bubble here
//     }
//   }, []); // Empty dependency array: Runs only once on mount

//   return (
//     <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
//       <primitive object={scene} />
//     </mesh>
//   );
// }

// export default Target;

// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// import gsap from 'gsap'

// import {useGSAP} from '@gsap/react'

// function Target(props) {
//   const targetRef = useRef()
//   const { scene } = useGLTF('/models/roboter_cute.glb');

//   useGSAP(() => {
//     gsap.to(targetRef.current.position, {
//       y: targetRef.current.position.y + 0.5,
//       duration: 1.5,
//       repeat: -1,
//       yoyo:true
//     })
//   })
//   return (
//     <mesh {...props} ref={targetRef} rotation={[0,Math.PI/5,0]} scale={1.5}>
//       <primitive object={scene}/>
//     </mesh>
//   )
// }

// export default Target
