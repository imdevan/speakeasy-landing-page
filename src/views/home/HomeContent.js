import macImage from '../../assets/images/app-screens/Mac.png';
import macOverlayImage from '../../assets/images/app-screens/MacOverlay.png';
import googleImage from '../../assets/images/app-screens/Google.png';
import windowsImage from '../../assets/images/app-screens/Windows.png';
import overwatchImage from '../../assets/images/app-screens/Overwatch.png';
import stripeImage from '../../assets/images/logos/stripe.png';
import firebaseImage from '../../assets/images/logos/firebase.png';
import googleSpeechImage from '../../assets/images/logos/google-speech.png';
import bisonStudioImage from '../../assets/images/logos/bison.svg';


const page = {
  title: 'Speakeasy',
  subtitle: `Speech to text for your desktop.<br/>Finally.`,
  features: [{
    title: 'Speech to text on your desktop',
    description: 'Press <code>~</code> and Speakeasy will automagically transcribe your speech.',
    image: macImage
  }, {
    title: 'Seriously, anywhere',
    description: 'You don`t have to be confined to using chrome for speech to text anymore.',
    image: macOverlayImage
  }, {
    title: 'Works with windows too ❤️',
    description: 'Speakeasy can make or break your teams game, we see you gamers.',
    image: windowsImage
  }, {
    title: 'Get things done, faster',
    description: 'Get everyday stuff done, 3 times faster.',
    image: googleImage
  }, {
    title: 'Communicate better with your team',
    description: `When there is no time to type, but you need to work together.`,
    image: overwatchImage
  }],
  valueProp: {
    title: 'Why waste time typing?',
    description: 'We talk <strong class=`font-title`>3</strong> times faster than we type. Now you can spending more time doing you, and less time worrying about typos.'
  },
  finalSell: {
    title: 'Speakeasy is free while in beta',
    description: 'Want to try it out?',
    cta: 'Yes, please!'
  },
  integrations: [{
    title: 'Google Speech',
    description: `We use Google's speech api to translate your voice`,
    image: googleSpeechImage
  }, {
    title: 'Stripe',
    description: 'Your payments are secured with Stripe',
    image: stripeImage
  }, {
    title: 'Firebase',
    description: 'Your data, secured with Google firebase',
    image: firebaseImage
  }],
  upsell: [{
    title: 'Working on a startup?',
    description: `My company <a href='https://www.bisonstudio.co' target='_blank'>Bison Studio</a> made this product, and website 😉`,
    image: bisonStudioImage
  }]  
}

export default page
