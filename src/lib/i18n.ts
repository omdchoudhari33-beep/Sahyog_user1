import type { Language } from '@/types';

export type TranslationKey =
  | 'appName'
  | 'tagline'
  | 'heroTitle'
  | 'heroSubtitle'
  | 'startReport'
  | 'trackStatus'
  | 'footerText'
  | 'stepLocation'
  | 'stepMedia'
  | 'stepDetails'
  | 'stepReview'
  | 'next'
  | 'back'
  | 'submit'
  | 'captureLocation'
  | 'getLocation'
  | 'locationCaptured'
  | 'locationError'
  | 'addressHint'
  | 'uploadPhotos'
  | 'uploadHint'
  | 'addDescription'
  | 'descriptionPlaceholder'
  | 'phoneNumber'
  | 'phoneNumberHint'
  | 'selectCategory'
  | 'categoryRoads'
  | 'categoryWater'
  | 'categorySanitation'
  | 'categoryElectricity'
  | 'categoryOther'
  | 'reviewSubmit'
  | 'submitting'
  | 'submitError'
  | 'successTitle'
  | 'successSubtitle'
  | 'yourTicketId'
  | 'saveTicketId'
  | 'trackYourReport'
  | 'successNextSteps'
  | 'reportAnother'
  | 'enterTicketId'
  | 'enterTicketIdHint'
  | 'enterPhone'
  | 'lookupTicket'
  | 'lookupError'
  | 'ticketNotFound'
  | 'statusTimeline'
  | 'statusSubmitted'
  | 'statusUnderReview'
  | 'statusInProgress'
  | 'statusResolved'
  | 'statusRejected'
  | 'reportNewIssue'
  | 'howItWorks'
  | 'howItWorksStep1'
  | 'howItWorksStep2'
  | 'howItWorksStep3'
  | 'howItWorksStep4'
  | 'language'
  | 'home';

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    appName: 'CitizenConnect',
    tagline: 'Report. Track. Resolve.',
    heroTitle: 'Your Voice, Your City',
    heroSubtitle:
      'Report civic issues like road damage, water leaks, or sanitation problems. Track progress in real time and hold your municipality accountable.',
    startReport: 'Report an Issue',
    trackStatus: 'Track a Report',
    footerText: 'A transparent civic reporting platform for every citizen.',
    stepLocation: 'Location',
    stepMedia: 'Photos',
    stepDetails: 'Details',
    stepReview: 'Review',
    next: 'Next',
    back: 'Back',
    submit: 'Submit Report',
    captureLocation: 'Capture Location',
    getLocation: 'Get My Location',
    locationCaptured: 'Location captured',
    locationError: 'Could not access your location. Please check permissions.',
    addressHint: 'Nearest landmark or address (optional)',
    uploadPhotos: 'Upload Photos',
    uploadHint: 'Take photos of the issue to help officials understand it better',
    addDescription: 'Describe the Issue',
    descriptionPlaceholder: 'Describe the issue in detail. What is wrong? When did you notice it?',
    phoneNumber: 'Phone Number',
    phoneNumberHint: 'We use this to send you status updates',
    selectCategory: 'Select Issue Category',
    categoryRoads: 'Roads & Potholes',
    categoryWater: 'Water Supply',
    categorySanitation: 'Sanitation & Waste',
    categoryElectricity: 'Electricity & Street Lights',
    categoryOther: 'Other',
    reviewSubmit: 'Review & Submit',
    submitting: 'Submitting...',
    submitError: 'Something went wrong. Please try again.',
    successTitle: 'Report Submitted!',
    successSubtitle: 'Your civic issue has been registered successfully.',
    yourTicketId: 'Your Ticket ID',
    saveTicketId: 'Save this ID to track your report later',
    trackYourReport: 'Track My Report',
    successNextSteps: 'What happens next?',
    reportAnother: 'Report Another Issue',
    enterTicketId: 'Enter Ticket ID',
    enterTicketIdHint: 'The ID you received when you submitted your report',
    enterPhone: 'Registered Phone Number',
    lookupTicket: 'Find My Report',
    lookupError: 'Could not find your report. Please check your details.',
    ticketNotFound: 'Ticket not found',
    statusTimeline: 'Status Timeline',
    statusSubmitted: 'Report Submitted',
    statusUnderReview: 'Under Review',
    statusInProgress: 'In Progress',
    statusResolved: 'Resolved',
    statusRejected: 'Rejected',
    reportNewIssue: 'Report New Issue',
    howItWorks: 'How It Works',
    howItWorksStep1: 'Report an issue with photos and location',
    howItWorksStep2: 'Get a unique Ticket ID instantly',
    howItWorksStep3: 'Officials review and assign your report',
    howItWorksStep4: 'Track progress until it is resolved',
    language: 'Language',
    home: 'Home',
  },
  hi: {
    appName: 'नागरिक संवाद',
    tagline: 'रिपोर्ट करें। ट्रैक करें। समाधान पाएं।',
    heroTitle: 'आपकी आवाज, आपका शहर',
    heroSubtitle:
      'सड़क क्षति, पानी का रिसाव, या सफाई समस्याओं जैसे नागरिक मुद्दों की रिपोर्ट करें। वास्तविक समय में प्रगति ट्रैक करें।',
    startReport: 'समस्या रिपोर्ट करें',
    trackStatus: 'रिपोर्ट ट्रैक करें',
    footerText: 'हर नागरिक के लिए एक पारदर्शक नागरिक रिपोर्टिंग मंच।',
    stepLocation: 'स्थान',
    stepMedia: 'फोटो',
    stepDetails: 'विवरण',
    stepReview: 'समीक्षा',
    next: 'अगला',
    back: 'पीछे',
    submit: 'रिपोर्ट जमा करें',
    captureLocation: 'स्थान कैप्चर करें',
    getLocation: 'मेरा स्थान प्राप्त करें',
    locationCaptured: 'स्थान कैप्चर किया गया',
    locationError: 'आपका स्थान एक्सेस नहीं हो सका। कृपया अनुमतियां जांचें।',
    addressHint: 'निकटतम स्थल या पता (वैकल्पिक)',
    uploadPhotos: 'फोटो अपलोड करें',
    uploadHint: 'अधिकारियों की मदद के लिए समस्या की फोटो लें',
    addDescription: 'समस्या का वर्णन करें',
    descriptionPlaceholder: 'समस्या का विस्तार से वर्णन करें। क्या गलत है? आपने कब नोटिस किया?',
    phoneNumber: 'फोन नंबर',
    phoneNumberHint: 'हम स्थिति अपडेट भेजने के लिए इसका उपयोग करते हैं',
    selectCategory: 'श्रेणी चुनें',
    categoryRoads: 'सड़कें और गड्ढे',
    categoryWater: 'जल आपूर्ति',
    categorySanitation: 'सफाई और अपशिष्ट',
    categoryElectricity: 'बिजली और स्ट्रीट लाइट',
    categoryOther: 'अन्य',
    reviewSubmit: 'समीक्षा और जमा',
    submitting: 'जमा हो रहा है...',
    submitError: 'कुछ गलत हुआ। कृपया पुनः प्रयास करें।',
    successTitle: 'रिपोर्ट जमा हो गई!',
    successSubtitle: 'आपकी नागरिक समस्या सफलतापूर्वक दर्ज हो गई है।',
    yourTicketId: 'आपका टिकट आईडी',
    saveTicketId: 'बाद में अपनी रिपोर्ट ट्रैक करने के लिए इस आईडी को सहेजें',
    trackYourReport: 'मेरी रिपोर्ट ट्रैक करें',
    successNextSteps: 'अब क्या होगा?',
    reportAnother: 'एक और समस्या रिपोर्ट करें',
    enterTicketId: 'टिकट आईडी दर्ज करें',
    enterTicketIdHint: 'रिपोर्ट जमा करते समय प्राप्त आईडी',
    enterPhone: 'पंजीकृत फोन नंबर',
    lookupTicket: 'मेरी रिपोर्ट खोजें',
    lookupError: 'आपकी रिपोर्ट नहीं मिल सकी। कृपया विवरण जांचें।',
    ticketNotFound: 'टिकट नहीं मिला',
    statusTimeline: 'स्थिति टाइमलाइन',
    statusSubmitted: 'रिपोर्ट जमा',
    statusUnderReview: 'समीक्षा में',
    statusInProgress: 'प्रगति पर',
    statusResolved: 'हल हो गया',
    statusRejected: 'अस्वीकृत',
    reportNewIssue: 'नई समस्या रिपोर्ट करें',
    howItWorks: 'यह कैसे काम करता है',
    howItWorksStep1: 'फोटो और स्थान के साथ समस्या रिपोर्ट करें',
    howItWorksStep2: 'तुरंत एक अद्वितीय टिकट आईडी प्राप्त करें',
    howItWorksStep3: 'अधिकारी आपकी रिपोर्ट की समीक्षा करते हैं',
    howItWorksStep4: 'हल होने तक प्रगति ट्रैक करें',
    language: 'भाषा',
    home: 'होम',
  },
  sa: {
    appName: 'ᱥᱤᱴᱤᱡᱚᱱ ᱠᱚᱱᱮᱠᱴ',
    tagline: 'ᱨᱤᱯᱚᱨᱴ ᱢᱮ᱾ ᱴᱨᱮᱠ ᱢᱮ᱾ ᱥᱚᱞᱣᱷᱟ ᱧᱟᱢ ᱢᱮ᱾',
    heroTitle: 'ᱟᱢᱟᱹ ᱨᱚᱲ, ᱟᱢᱟᱹ ᱥᱚᱦᱚᱨ',
    heroSubtitle: 'ᱥᱚᱲᱚᱠ ᱰᱷᱟᱠ, ᱫᱟᱜ ᱞᱤᱠ, ᱟᱨ ᱥᱟᱯᱷᱟ ᱮᱢ ᱥᱟᱶᱛᱮ ᱥᱤᱴᱤᱡᱚᱱ ᱢᱮᱰᱟ ᱨᱤᱯᱚᱨᱴ ᱢᱮ᱾',
    startReport: 'ᱢᱮᱰᱟ ᱨᱤᱯᱚᱨᱴ ᱢᱮ',
    trackStatus: 'ᱨᱤᱯᱚᱨᱴ ᱴᱨᱮᱠ ᱢᱮ',
    footerText: 'ᱡᱷᱚᱛᱚ ᱥᱤᱴᱤᱡᱚᱱ ᱞᱟᱹᱜᱤᱫ ᱢᱤᱫ ᱯᱟᱨᱫᱚᱨᱥᱤ ᱥᱤᱴᱤᱡᱚᱱ ᱨᱤᱯᱚᱨᱴᱤᱝ ᱯᱞᱮᱴᱯᱷᱚᱨᱢ᱾',
    stepLocation: 'ᱡᱟᱜᱟ',
    stepMedia: 'ᱯᱷᱚᱴᱚ',
    stepDetails: 'ᱵᱤᱵᱚᱨᱚᱬ',
    stepReview: 'ᱨᱤᱵᱷᱤᱭᱩ',
    next: 'ᱤᱱᱟᱹ',
    back: 'ᱯᱤᱪᱷᱚ',
    submit: 'ᱨᱤᱯᱚᱨᱴ ᱡᱚᱢᱟ ᱢᱮ',
    captureLocation: 'ᱡᱟᱜᱟ ᱠᱮᱯᱪᱚᱨ ᱢᱮ',
    getLocation: 'ᱤᱧᱟᱹᱛᱮ ᱡᱟᱜᱟ ᱧᱟᱢ ᱢᱮ',
    locationCaptured: 'ᱡᱟᱜᱟ ᱠᱮᱯᱪᱚᱨ ᱦᱩᱭᱮᱱᱟ',
    locationError: 'ᱟᱢᱟᱹ ᱡᱟᱜᱟ ᱮᱠᱥᱮᱥ ᱵᱟᱭ ᱜᱟᱱᱚᱜ ᱠᱟᱱᱟ᱾',
    addressHint: 'ᱥᱩᱨ ᱥᱮᱫᱟᱜ ᱡᱟᱜᱟ ᱟᱨᱵᱟᱝ ᱴᱷᱟᱶ (ᱵᱟᱪᱷᱟᱣ)',
    uploadPhotos: 'ᱯᱷᱚᱴᱚ ᱟᱯᱞᱚᱰ ᱢᱮ',
    uploadHint: 'ᱚᱯᱷᱤᱥᱤᱭᱟᱞ ᱠᱚᱣᱟᱜ ᱜᱚᱲᱚ ᱞᱟᱹᱜᱤᱫ ᱢᱮᱰᱟ ᱨᱮᱱᱟᱜ ᱯᱷᱚᱴᱚ ᱤᱫᱤ ᱢᱮ',
    addDescription: 'ᱢᱮᱰᱟ ᱵᱚᱨᱱᱚᱱ ᱢᱮ',
    descriptionPlaceholder: 'ᱢᱮᱰᱟ ᱵᱤᱥᱛᱤ ᱨᱮ ᱵᱚᱨᱱᱚᱱ ᱢᱮ᱾ ᱪᱮᱫ ᱵᱷᱩᱞ ᱟᱠᱟᱱᱟ? ᱚᱠᱟ ᱫᱤᱱ ᱧᱮᱞ ᱠᱮᱫᱟ?',
    phoneNumber: 'ᱯᱷᱚᱱ ᱞᱮᱠᱷᱟ',
    phoneNumberHint: 'ᱤᱧ ᱡᱟᱦᱟᱸ ᱛᱮ ᱦᱟᱞᱚᱛ ᱚᱯᱰᱮᱴ ᱵᱷᱮᱡ ᱤᱧᱟᱜᱼᱟ',
    selectCategory: 'ᱛᱚᱢᱟ ᱵᱟᱪᱷᱟᱣ ᱢᱮ',
    categoryRoads: 'ᱥᱚᱲᱚᱠ ᱟᱨ ᱵᱷᱮᱜᱟᱨ',
    categoryWater: 'ᱫᱟᱜ ᱥᱟᱯᱞᱟᱭ',
    categorySanitation: 'ᱥᱟᱯᱷᱟ ᱟᱨ ᱵᱟᱦᱟ',
    categoryElectricity: 'ᱵᱤᱡᱚᱞᱤ ᱟᱨ ᱥᱴᱨᱤᱴ ᱞᱟᱭᱤᱴ',
    categoryOther: 'ᱮᱴᱟᱜ',
    reviewSubmit: 'ᱨᱤᱵᱷᱤᱭᱩ ᱟᱨ ᱡᱚᱢᱟ',
    submitting: 'ᱡᱚᱢᱟ ᱦᱩᱭᱩᱜ ᱠᱟᱱᱟ...',
    submitError: 'ᱡᱟᱦᱱᱟᱜ ᱵᱷᱩᱞ ᱦᱩᱭᱮᱱᱟ᱾ ᱫᱩᱦᱲᱟᱹ ᱪᱮᱥᱴᱟ ᱢᱮ᱾',
    successTitle: 'ᱨᱤᱯᱚᱨᱴ ᱡᱚᱢᱟ ᱦᱩᱭᱮᱱᱟ!',
    successSubtitle: 'ᱟᱢᱟᱹ ᱥᱤᱴᱤᱡᱚᱱ ᱢᱮᱰᱟ ᱥᱚᱯᱷᱚᱞᱛᱟ ᱛᱮ ᱚᱞ ᱦᱩᱭᱮᱱᱟ᱾',
    yourTicketId: 'ᱟᱢᱟᱹ ᱴᱤᱠᱮᱴ ᱟᱭᱰᱤ',
    saveTicketId: 'ᱛᱟᱭᱚᱢ ᱛᱮ ᱴᱨᱮᱠ ᱞᱟᱹᱜᱤᱫ ᱱᱚᱶᱟ ᱟᱭᱰᱤ ᱥᱟᱵᱽ ᱢᱮ',
    trackYourReport: 'ᱤᱧᱟᱹᱛᱮ ᱨᱤᱯᱚᱨᱴ ᱴᱨᱮᱠ ᱢᱮ',
    successNextSteps: 'ᱚᱠᱟ ᱛᱟᱭᱚᱢ ᱦᱩᱭᱩᱜᱼᱟ?',
    reportAnother: 'ᱢᱤᱫ ᱟᱨ ᱢᱮᱰᱟ ᱨᱤᱯᱚᱨᱴ ᱢᱮ',
    enterTicketId: 'ᱴᱤᱠᱮᱴ ᱟᱭᱰᱤ ᱟᱫᱮᱞ ᱢᱮ',
    enterTicketIdHint: 'ᱨᱤᱯᱚᱨᱴ ᱡᱚᱢᱟ ᱚᱠᱛᱮ ᱧᱟᱢ ᱟᱠᱟᱱ ᱟᱭᱰᱤ',
    enterPhone: 'ᱨᱮᱡᱤᱥᱴᱚᱨ ᱯᱷᱚᱱ ᱞᱮᱠᱷᱟ',
    lookupTicket: 'ᱤᱧᱟᱹᱛᱮ ᱨᱤᱯᱚᱨᱴ ᱯᱷᱤᱱᱰ ᱢᱮ',
    lookupError: 'ᱟᱢᱟᱹ ᱨᱤᱯᱚᱨᱴ ᱵᱟᱭ ᱧᱟᱢ ᱜᱟᱱᱚᱜ ᱠᱟᱱᱟ᱾',
    ticketNotFound: 'ᱴᱤᱠᱮᱴ ᱵᱟᱭ ᱧᱟᱢ ᱟᱠᱟᱱᱟ',
    statusTimeline: 'ᱦᱟᱞᱚᱛ ᱴᱟᱭᱤᱢᱞᱟᱭᱤᱱ',
    statusSubmitted: 'ᱨᱤᱯᱚᱨᱴ ᱡᱚᱢᱟ',
    statusUnderReview: 'ᱨᱤᱵᱷᱤᱭᱩ ᱨᱮ',
    statusInProgress: 'ᱯᱨᱚᱜᱽᱨᱮᱥ ᱨᱮ',
    statusResolved: 'ᱥᱚᱞᱣᱷᱟ ᱦᱩᱭᱮᱱᱟ',
    statusRejected: 'ᱵᱟᱹᱱᱩᱜ',
    reportNewIssue: 'ᱱᱟᱶᱟ ᱢᱮᱰᱟ ᱨᱤᱯᱚᱨᱴ ᱢᱮ',
    howItWorks: 'ᱱᱚᱶᱟ ᱪᱮᱫᱽᱲᱟᱹ ᱠᱟᱹᱢᱤᱭᱟᱜ ᱠᱟᱱᱟ',
    howItWorksStep1: 'ᱯᱷᱚᱴᱚ ᱟᱨ ᱡᱟᱜᱟ ᱥᱟᱶᱛᱮ ᱢᱮᱰᱟ ᱨᱤᱯᱚᱨᱴ ᱢᱮ',
    howItWorksStep2: 'ᱞᱚᱜᱚᱱ ᱢᱤᱫ ᱭᱩᱱᱤᱠ ᱴᱤᱠᱮᱴ ᱟᱭᱰᱤ ᱧᱟᱢ ᱢᱮ',
    howItWorksStep3: 'ᱚᱯᱷᱤᱥᱤᱭᱟᱞ ᱟᱢᱟᱹ ᱨᱤᱯᱚᱨᱴ ᱨᱤᱵᱷᱤᱭᱩ ᱠᱚᱲᱟᱣᱟ',
    howItWorksStep4: 'ᱥᱚᱞᱣᱷᱟ ᱦᱟᱹᱵᱤᱡ ᱯᱨᱚᱜᱽᱨᱮᱥ ᱴᱨᱮᱠ ᱢᱮ',
    language: 'ᱯᱟᱹᱨᱥᱤ',
    home: 'ᱚᱲᱟᱜ',
  },
  bn: {
    appName: 'নাগরিক সংযোগ',
    tagline: 'রিপোর্ট করুন। ট্র্যাক করুন। সমাধান পান।',
    heroTitle: 'আপনার কণ্ঠ, আপনার শহর',
    heroSubtitle:
      'রাস্তার ক্ষতি, জল লিক, বা স্যানিটেশন সমস্যার মতো নাগরিক বিষয় রিপোর্ট করুন। রিয়েল টাইমে অগ্রগতি ট্র্যাক করুন।',
    startReport: 'সমস্যা রিপোর্ট করুন',
    trackStatus: 'রিপোর্ট ট্র্যাক করুন',
    footerText: 'প্রতিটি নাগরিকের জন্য একটি স্বচ্ছ নাগরিক রিপোর্টিং প্ল্যাটফর্ম।',
    stepLocation: 'অবস্থান',
    stepMedia: 'ছবি',
    stepDetails: 'বিবরণ',
    stepReview: 'পর্যালোচনা',
    next: 'পরবর্তী',
    back: 'পিছনে',
    submit: 'রিপোর্ট জমা দিন',
    captureLocation: 'অবস্থান ক্যাপচার করুন',
    getLocation: 'আমার অবস্থান পান',
    locationCaptured: 'অবস্থান ক্যাপচার করা হয়েছে',
    locationError: 'আপনার অবস্থান অ্যাক্সেস করা যায়নি। অনুমতি চেক করুন।',
    addressHint: 'নিকটতম ল্যান্ডমার্ক বা ঠিকানা (ঐচ্ছিক)',
    uploadPhotos: 'ছবি আপলোড করুন',
    uploadHint: 'কর্মকর্তাদের সাহায্যের জন্য সমস্যার ছবি তুলুন',
    addDescription: 'সমস্যা বর্ণনা করুন',
    descriptionPlaceholder: 'সমস্যার বিস্তারিত বর্ণনা করুন। কী ভুল? কখন লক্ষ্য করেছেন?',
    phoneNumber: 'ফোন নম্বর',
    phoneNumberHint: 'আমরা আপনাকে স্থিতি আপডেট পাঠাতে এটি ব্যবহার করি',
    selectCategory: 'বিভাগ নির্বাচন করুন',
    categoryRoads: 'রাস্তা ও গর্ত',
    categoryWater: 'জল সরবরাহ',
    categorySanitation: 'স্যানিটেশন ও বর্জ্য',
    categoryElectricity: 'বিদ্যুৎ ও স্ট্রিট লাইট',
    categoryOther: 'অন্যান্য',
    reviewSubmit: 'পর্যালোচনা ও জমা',
    submitting: 'জমা হচ্ছে...',
    submitError: 'কিছু ভুল হয়েছে। আবার চেষ্টা করুন।',
    successTitle: 'রিপোর্ট জমা হয়েছে!',
    successSubtitle: 'আপনার নাগরিক সমস্যা সফলভাবে নিবন্ধিত হয়েছে।',
    yourTicketId: 'আপনার টিকিট আইডি',
    saveTicketId: 'পরে আপনার রিপোর্ট ট্র্যাক করতে এই আইডি সংরক্ষণ করুন',
    trackYourReport: 'আমার রিপোর্ট ট্র্যাক করুন',
    successNextSteps: 'এরপর কী হবে?',
    reportAnother: 'আরেকটি সমস্যা রিপোর্ট করুন',
    enterTicketId: 'টিকিট আইডি লিখুন',
    enterTicketIdHint: 'রিপোর্ট জমা দেওয়ার সময় প্রাপ্ত আইডি',
    enterPhone: 'নিবন্ধিত ফোন নম্বর',
    lookupTicket: 'আমার রিপোর্ট খুঁজুন',
    lookupError: 'আপনার রিপোর্ট পাওয়া যায়নি। বিবরণ চেক করুন।',
    ticketNotFound: 'টিকিট পাওয়া যায়নি',
    statusTimeline: 'স্থিতি টাইমলাইন',
    statusSubmitted: 'রিপোর্ট জমা',
    statusUnderReview: 'পর্যালোচনায়',
    statusInProgress: 'প্রগতিতে',
    statusResolved: 'সমাধান হয়েছে',
    statusRejected: 'প্রত্যাখ্যাত',
    reportNewIssue: 'নতুন সমস্যা রিপোর্ট করুন',
    howItWorks: 'কীভাবে কাজ করে',
    howItWorksStep1: 'ছবি এবং অবস্থান সহ সমস্যা রিপোর্ট করুন',
    howItWorksStep2: 'অবিলম্বে একটি অনন্য টিকিট আইডি পান',
    howItWorksStep3: 'কর্মকর্তারা আপনার রিপোর্ট পর্যালোচনা করেন',
    howItWorksStep4: 'সমাধান না হওয়া পর্যন্ত অগ্রগতি ট্র্যাক করুন',
    language: 'ভাষা',
    home: 'হোম',
  },
  or: {
    appName: 'ନାଗରିକ ସଂଯୋଗ',
    tagline: 'ରିପୋର୍ଟ କରନ୍ତୁ। ଟ୍ରାକ୍ କରନ୍ତୁ। ସମାଧାନ ପାଆନ୍ତୁ।',
    heroTitle: 'ଆପଣଙ୍କ ସ୍ୱର, ଆପଣଙ୍କ ସହର',
    heroSubtitle:
      'ରାସ୍ତା କ୍ଷତି, ପାଣି ଲିକ୍, କିମ୍ବା ସ୍ୱଚ୍ଛତା ସମସ୍ୟା ଭଳି ନାଗରିକ ସମସ୍ୟା ରିପୋର୍ଟ କରନ୍ତୁ। ବାସ୍ତବ ସମୟରେ ପ୍ରଗତି ଟ୍ରାକ୍ କରନ୍ତୁ।',
    startReport: 'ସମସ୍ୟା ରିପୋର୍ଟ କରନ୍ତୁ',
    trackStatus: 'ରିପୋର୍ଟ ଟ୍ରାକ୍ କରନ୍ତୁ',
    footerText: 'ପ୍ରତ୍ୟେକ ନାଗରିକଙ୍କ ପାଇଁ ଏକ ସ୍ୱଚ୍ଛ ନାଗରିକ ରିପୋର୍ଟିଂ ପ୍ଲାଟଫର୍ମ।',
    stepLocation: 'ସ୍ଥାନ',
    stepMedia: 'ଫଟୋ',
    stepDetails: 'ବିବରଣ',
    stepReview: 'ସମୀକ୍ଷା',
    next: 'ପରବର୍ତ୍ତୀ',
    back: 'ପଛକୁ',
    submit: 'ରିପୋର୍ଟ ଦାଖଲ କରନ୍ତୁ',
    captureLocation: 'ସ୍ଥାନ କ୍ୟାପଚର କରନ୍ତୁ',
    getLocation: 'ମୋର ସ୍ଥାନ ପାଆନ୍ତୁ',
    locationCaptured: 'ସ୍ଥାନ କ୍ୟାପଚର ହୋଇଛି',
    locationError: 'ଆପଣଙ୍କ ସ୍ଥାନ ଆକ୍ସେସ୍ କରିପାରିଲା ନାହିଁ। ଅନୁମତି ଯାଞ୍ଚ କରନ୍ତୁ।',
    addressHint: 'ନିକଟତମ ଲ୍ୟାଣ୍ଡମାର୍କ ବା ଠିକଣା (ଐଚ୍ଛିକ)',
    uploadPhotos: 'ଫଟୋ ଅପଲୋଡ୍ କରନ୍ତୁ',
    uploadHint: 'ଅଧିକାରୀଙ୍କ ସାହାଯ୍ୟ ପାଇଁ ସମସ୍ୟାର ଫଟୋ ଉଠାନ୍ତୁ',
    addDescription: 'ସମସ୍ୟା ବର୍ଣ୍ଣନା କରନ୍ତୁ',
    descriptionPlaceholder: 'ସମସ୍ୟା ବିସ୍ତୃତରେ ବର୍ଣ୍ଣନା କରନ୍ତୁ। କଣ ଭୁଲ? କେବେ ଧ୍ୟାନ ଦେଲେ?',
    phoneNumber: 'ଫୋନ୍ ନମ୍ବର',
    phoneNumberHint: 'ଆମେ ଆପଣଙ୍କୁ ସ୍ଥିତି ଅପଡେଟ୍ ପଠାଇବାକୁ ଏହା ବ୍ୟବହାର କରୁ',
    selectCategory: 'ବର୍ଗ ବାଛନ୍ତୁ',
    categoryRoads: 'ରାସ୍ତା ଓ ଗର୍ତ',
    categoryWater: 'ଜଳ ଯୋଗାଣ',
    categorySanitation: 'ସ୍ୱଚ୍ଛତା ଓ ବର୍ଜ୍ଜ୍ୱା',
    categoryElectricity: 'ବିଦ୍ୟୁତ୍ ଓ ଷ୍ଟ୍ରିଟ୍ ଲାଇଟ୍',
    categoryOther: 'ଅନ୍ୟାନ୍ୟ',
    reviewSubmit: 'ସମୀକ୍ଷା ଓ ଦାଖଲ',
    submitting: 'ଦାଖଲ ହେଉଛି...',
    submitError: 'କିଛି ଭୁଲ ହେଲା। ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।',
    successTitle: 'ରିପୋର୍ଟ ଦାଖଲ ହେଲା!',
    successSubtitle: 'ଆପଣଙ୍କ ନାଗରିକ ସମସ୍ୟା ସଫଳତାର ସହ ପଞ୍ଜିକୃତ ହେଲା।',
    yourTicketId: 'ଆପଣଙ୍କ ଟିକେଟ୍ ଆଇଡି',
    saveTicketId: 'ପରେ ଆପଣଙ୍କ ରିପୋର୍ଟ ଟ୍ରାକ୍ କରିବାକୁ ଏହି ଆଇଡି ସଞ୍ଚୟ କରନ୍ତୁ',
    trackYourReport: 'ମୋର ରିପୋର୍ଟ ଟ୍ରାକ୍ କରନ୍ତୁ',
    successNextSteps: 'ଏବେ କଣ ହେବ?',
    reportAnother: 'ଆଉ ଏକ ସମସ୍ୟା ରିପୋର୍ଟ କରନ୍ତୁ',
    enterTicketId: 'ଟିକେଟ୍ ଆଇଡି ପ୍ରବେଶ କରନ୍ତୁ',
    enterTicketIdHint: 'ରିପୋର୍ଟ ଦାଖଲ କଲାବେଳେ ମିଳିଥିବା ଆଇଡି',
    enterPhone: 'ପଞ୍ଜିକୃତ ଫୋନ୍ ନମ୍ବର',
    lookupTicket: 'ମୋର ରିପୋର୍ଟ ଖୋଜନ୍ତୁ',
    lookupError: 'ଆପଣଙ୍କ ରିପୋର୍ଟ ମିଳିଲା ନାହିଁ। ବିବରଣ ଯାଞ୍ଚ କରନ୍ତୁ।',
    ticketNotFound: 'ଟିକେଟ୍ ମିଳିଲା ନାହିଁ',
    statusTimeline: 'ସ୍ଥିତି ଟାଇମଲାଇନ୍',
    statusSubmitted: 'ରିପୋର୍ଟ ଦାଖଲ',
    statusUnderReview: 'ସମୀକ୍ଷାରେ',
    statusInProgress: 'ପ୍ରଗତିରେ',
    statusResolved: 'ସମାଧାନ ହେଲା',
    statusRejected: 'ଅସ୍ୱୀକୃତ',
    reportNewIssue: 'ନୂଆ ସମସ୍ୟା ରିପୋର୍ଟ କରନ୍ତୁ',
    howItWorks: 'ଏହା କିପରି କାମ କରେ',
    howItWorksStep1: 'ଫଟୋ ଏବଂ ସ୍ଥାନ ସହିତ ସମସ୍ୟା ରିପୋର୍ଟ କରନ୍ତୁ',
    howItWorksStep2: 'ତୁରନ୍ତ ଏକ ଅଦ୍ୱିତୀୟ ଟିକେଟ୍ ଆଇଡି ପାଆନ୍ତୁ',
    howItWorksStep3: 'ଅଧିକାରୀମାନେ ଆପଣଙ୍କ ରିପୋର୍ଟ ସମୀକ୍ଷା କରନ୍ତି',
    howItWorksStep4: 'ସମାଧାନ ନହେବା ଯାଏଁ ପ୍ରଗତି ଟ୍ରାକ୍ କରନ୍ତୁ',
    language: 'ଭାଷା',
    home: 'ହୋମ୍',
  },
};

export function getTranslation(lang: Language, key: TranslationKey): string {
  return translations[lang][key] || translations.en[key];
}

export const languageNames: Record<Language, string> = {
  en: 'English',
  hi: 'हिन्दी',
  sa: 'ᱥᱟᱱᱛᱟᱲᱤ',
  bn: 'বাংলা',
  or: 'ଓଡ଼ିଆ',
};

export const languageCodes: Language[] = ['en', 'hi', 'sa', 'bn', 'or'];
