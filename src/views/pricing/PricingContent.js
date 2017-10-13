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
        description: 'People speak <strong>2.5</strong> faster than they type.'
    }, {
        value: 'Express yourself',
        description: `Google's speech to text api let's you talk without worrying about Speakeasy having to understand you.`
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
        description: 'If you type one key at a time, this app will rock your world.'
    }, {
        title: 'Power users',
        icon: '👨🏻‍💻',
        description: 'If you want to get the most out of your time, this app will help you get things done <strong>2.5</strong> times faster.'
    }, {
        title: 'Gamers',
        icon: '👩🏼‍🚀',
        description: `It's hard enough to type and play games at the same time. Let Speakeasy do the heavy typing for you.`
    }],
    popUp: {
        title: 'Thanks your interest in Speakeasy', 
        description: `I'm hard at working making sure that Speakeasy, makes speech to text easy for you. To hear when we launch leave your name and email 😉`
    }
}}

export default page
