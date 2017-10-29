const yearCost = 35;
const monthlyCost = 5;

import stripeImage from '../../assets/images/logos/stripe.png';
import googleSpeechImage from '../../assets/images/logos/google-speech.png';

const page = {
    title: `Speech to text for your desktop.<br/>Finally.`,
    pricing: [{
        type: 'Monthly',
        price: monthlyCost,
        symbol: 'mo',
        cta: 'Free during beta'
    }, {
        type: 'Yearly',
        price: yearCost,
        symbol: 'yr',
        upsell: `*save $${(monthlyCost * 12) - yearCost}`,
        cta: 'Free during beta'
    }],
    features: [{
        value: 'Be faster',
        description: 'Now you can finish tasks up to <strong>3</strong> times faster..'
    }, {
        value: 'Express yourself',
        description: `Google's speech to text api is rock solid, and can pick up your voice in noisy environments.`
    }, {
        value: 'Only there when you need it',
        description: `We don't listen to you're voice all the time. Just when you press <code>~</code> or your hotkey.`
    }, {
        value: 'Easy to use',
        description: `Speakeasy is easy to use, and fun too. 😉`
    }],
    integrations: [{
        title: 'Google Speech Api',
        image: googleSpeechImage,
        description: `Speakeasy securly passes your data to Google Speech API, and we pass they're results to you. No middle man, just love.`
    }, {
        title: 'Stripe',
        image: stripeImage,
        description: `Your payments are secure with Stripe. We don't save any of your card info.`
    }],
market: {
    title: 'Speakeasy is for', 
    list: [{
        title: 'Slow typers',
        icon: '👵🏼',
        description: 'You currently type 1 key at a time, or have to look at the keyboard when you type.'
    }, {
        title: 'Power users',
        icon: '👨🏻‍💻',
        description: 'You want to squeeze every bit of productivity out of your time at your computer.'
    }, {
        title: 'Gamers',
        icon: '👩🏼‍🚀',
        description: `You really want to communicate with your team, but it takes way to long to type.`
    }],
    popUp: {
        title: 'Thanks your interest in Speakeasy', 
        description: `I'm hard at working making sure that Speakeasy, makes speech to text easy for you. To hear when we launch leave your name and email 😉`
    },
    offer: {
        reference: 'paricing-page',
        funnel: 'beta-tester'
    }
}}

export default page
