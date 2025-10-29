import { NextResponse } from 'next/server'

const collegeData = {
  name: "SIES Autonomous Science College of Arts, Science and Commerce, Nerul",
  accreditation: "NAAC 'A' Grade (CGPA 3.01/4.00), UGC Autonomous status",

  undergraduateCourses: [
    "Bachelor of Management Studies (BMS)",
    "BSc Packaging",
    "BSc Data Science",
    "BSc Environmental Science",
    "Other B.Sc. programs",
    "B.Com programs",
    "B.A. programs"
  ],

  postgraduateCourses: [
    "MSc Computer Science",
    "MSc Information Technology",
    "MSc Environmental Science",
    "M.Com (Master of Commerce)",
    "MA Economics",
    "MA Mass Media and Communication (MAMMC)"
  ],

  contact: {
    email: "ascnsies@sies.edu.in",
    admissionEmail: "siesce@sies.edu.in",
    phone: "(022) 61196414/15",
    admissionPhone: "(022) 24074944",
    hours: "10:00 AM to 3:00 PM, Monday to Friday",
    website: "https://siesascn.edu.in",
    admissionWebsite: "www.siesce.edu.in"
  },

  facilities: [
    "Well-equipped Library",
    "Boys Hostel (recommended)",
    "Career Guidance and Placement Cell",
    "NSS (National Service Scheme)",
    "Rotaract Club",
    "Sports facilities",
    "Various student committees"
  ],

  admissionProcess: [
    "Visit www.siesce.edu.in for detailed admission information",
    "Download the college prospectus (SIESASCN Prospectus-2025.pdf)",
    "Check eligibility criteria for your desired course",
    "Submit application as per the admission schedule",
    "Contact the college during office hours for specific queries"
  ],

  principal: "Dr. Nina Roy Choudhury",
  location: "Nerul",
  mission: "Creating a better society by educating future generations"
}

function generateResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase()

  // Courses queries
  if (lowerMessage.includes('course') || lowerMessage.includes('program') || lowerMessage.includes('degree')) {
    if (lowerMessage.includes('ug') || lowerMessage.includes('undergraduate') || lowerMessage.includes('bachelor')) {
      return `## Undergraduate Courses at SIES College

${collegeData.undergraduateCourses.map(course => `- ${course}`).join('\n')}

These are the main undergraduate programs. For detailed information about specific courses, eligibility, and curriculum, please contact the college at ${collegeData.contact.admissionEmail} or visit ${collegeData.contact.admissionWebsite}.

**Would you like to know about postgraduate courses or admission process?**`
    }

    if (lowerMessage.includes('pg') || lowerMessage.includes('postgraduate') || lowerMessage.includes('master')) {
      return `## Postgraduate Courses at SIES College

${collegeData.postgraduateCourses.map(course => `- ${course}`).join('\n')}

These are the main postgraduate programs offered. For detailed information about specific courses, eligibility, and curriculum, please contact the college.

**Would you like to know more about any specific program?**`
    }

    return `## Courses Offered at SIES College

### Undergraduate Programs:
${collegeData.undergraduateCourses.map(course => `- ${course}`).join('\n')}

### Postgraduate Programs:
${collegeData.postgraduateCourses.map(course => `- ${course}`).join('\n')}

For detailed information about any specific course, please contact ${collegeData.contact.admissionEmail} or call ${collegeData.contact.admissionPhone}.`
  }

  // Admission queries
  if (lowerMessage.includes('admission') || lowerMessage.includes('apply') || lowerMessage.includes('application')) {
    return `## Admission Process at SIES College

### Steps to Apply:
${collegeData.admissionProcess.map((step, index) => `${index + 1}. ${step}`).join('\n')}

### Important Contact:
- **Admission Email:** ${collegeData.contact.admissionEmail}
- **Phone:** ${collegeData.contact.admissionPhone}
- **Office Hours:** ${collegeData.contact.hours}
- **Admission Portal:** ${collegeData.contact.admissionWebsite}

### Key Information:
- Download the latest prospectus for complete admission details
- Check specific eligibility criteria for your desired course
- Look out for admission notices on the college website

**Would you like to know about specific course eligibility or fees?**`
  }

  // Eligibility queries
  if (lowerMessage.includes('eligib') || lowerMessage.includes('requirement') || lowerMessage.includes('criteria')) {
    return `## Eligibility Criteria

The eligibility criteria varies by course and program level. Here's what you need to know:

### General Guidelines:
- **For UG Courses:** Completion of 10+2 (HSC) with required percentage in relevant subjects
- **For PG Courses:** Completion of relevant undergraduate degree with minimum required percentage

### To Get Specific Details:
1. Download the college prospectus from ${collegeData.contact.website}
2. Contact the admission office at ${collegeData.contact.admissionEmail}
3. Call ${collegeData.contact.admissionPhone} during office hours (${collegeData.contact.hours})

**Note:** Eligibility criteria may include academic scores, entrance exam results, and other requirements depending on the specific program.

**Would you like information about any specific course?**`
  }

  // Fees queries
  if (lowerMessage.includes('fee') || lowerMessage.includes('cost') || lowerMessage.includes('tuition') || lowerMessage.includes('price')) {
    return `## Fee Information

For detailed and accurate fee structure information:

### Contact Admission Office:
- **Email:** ${collegeData.contact.admissionEmail}
- **Phone:** ${collegeData.contact.admissionPhone}
- **Office Hours:** ${collegeData.contact.hours}

### How to Get Fee Details:
1. Download the official college prospectus from ${collegeData.contact.website}
2. Visit the admission portal at ${collegeData.contact.admissionWebsite}
3. Contact the college directly for the most up-to-date fee structure

**Note:** Fee structure may vary by course, year, and category. The prospectus contains complete fee details for all programs.

**Would you like help with anything else regarding admissions?**`
  }

  // Contact queries
  if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
    return `## Contact SIES College

### General Inquiries:
- **Email:** ${collegeData.contact.email}
- **Phone:** ${collegeData.contact.phone}

### Admission Inquiries:
- **Email:** ${collegeData.contact.admissionEmail}
- **Phone:** ${collegeData.contact.admissionPhone}

### Office Hours:
${collegeData.contact.hours}

### Websites:
- **College Website:** ${collegeData.contact.website}
- **Admission Portal:** ${collegeData.contact.admissionWebsite}

### Principal:
${collegeData.principal}

**Location:** ${collegeData.location}

**Feel free to reach out during office hours for any admission-related queries!**`
  }

  // Infrastructure/Facilities queries
  if (lowerMessage.includes('facilit') || lowerMessage.includes('infrastructure') || lowerMessage.includes('hostel') || lowerMessage.includes('library') || lowerMessage.includes('campus')) {
    return `## Facilities at SIES College

The college offers various facilities for student development:

### Student Facilities:
${collegeData.facilities.map(facility => `- ${facility}`).join('\n')}

### Accreditation & Recognition:
- ${collegeData.accreditation}
- Managed by The South Indian Education Society

### Campus Life:
The college provides a vibrant campus environment with opportunities for:
- Academic excellence through modern facilities
- Co-curricular activities through various clubs
- Career development through placement cell
- Social service through NSS
- Sports and recreation

**Would you like to know more about any specific facility or student activity?**`
  }

  // About college queries
  if (lowerMessage.includes('about') || lowerMessage.includes('college') && !lowerMessage.includes('course')) {
    return `## About SIES Autonomous Science College

**${collegeData.name}**

### Recognition & Accreditation:
- ${collegeData.accreditation}
- Managed by The South Indian Education Society

### Mission:
"${collegeData.mission}"

### Principal:
${collegeData.principal}

### Location:
${collegeData.location}

### Academic Excellence:
The college offers a wide range of undergraduate and postgraduate programs in Arts, Science, Commerce, and Management.

### Key Highlights:
- Autonomous status granted by UGC
- NAAC 'A' Grade accreditation
- Modern infrastructure and facilities
- Active placement cell
- Vibrant student life with various clubs and activities

**Would you like to know about courses, admissions, or facilities?**`
  }

  // BMS specific
  if (lowerMessage.includes('bms') || lowerMessage.includes('management')) {
    return `## Bachelor of Management Studies (BMS)

BMS is one of the popular undergraduate programs offered at SIES College.

### About BMS:
- Duration: 3 years (undergraduate program)
- Field: Business and Management Studies
- Career opportunities in various management sectors

### For Detailed Information:
- **Eligibility criteria:** Check the college prospectus
- **Admission process:** Visit ${collegeData.contact.admissionWebsite}
- **Fee structure:** Contact ${collegeData.contact.admissionEmail}
- **Curriculum details:** Available in the prospectus

### Contact for BMS Admission:
- Email: ${collegeData.contact.admissionEmail}
- Phone: ${collegeData.contact.admissionPhone}

**The college regularly updates admission notices for BMS. Check the website for latest updates!**`
  }

  // Data Science specific
  if (lowerMessage.includes('data science') || lowerMessage.includes('data')) {
    return `## BSc Data Science

SIES College offers BSc in Data Science, one of the modern and in-demand programs.

### About BSc Data Science:
- Duration: 3 years (undergraduate program)
- Field: Computer Science, Statistics, and Data Analytics
- Growing field with excellent career prospects

### For Detailed Information:
- **Eligibility:** Typically requires Science background in 10+2
- **Admission details:** Visit ${collegeData.contact.admissionWebsite}
- **Course structure:** Available in the college prospectus

### Contact:
- Email: ${collegeData.contact.admissionEmail}
- Phone: ${collegeData.contact.admissionPhone}

**This is a relatively new and exciting program. Contact the college for complete curriculum details!**`
  }

  // Computer Science/IT specific
  if (lowerMessage.includes('computer') || lowerMessage.includes('it') || lowerMessage.includes('information technology')) {
    return `## Computer Science & IT Programs

SIES College offers postgraduate programs in Computer Science and IT:

### Programs Available:
- **MSc Computer Science** (Postgraduate)
- **MSc Information Technology** (Postgraduate)

### About These Programs:
- Duration: 2 years (postgraduate)
- Advanced study in computing and technology
- Research opportunities available

### Eligibility:
Typically requires relevant undergraduate degree in Computer Science, IT, or related field

### For More Information:
- **Admission details:** ${collegeData.contact.admissionWebsite}
- **Contact:** ${collegeData.contact.admissionEmail}
- **Phone:** ${collegeData.contact.admissionPhone}

**These programs are ideal for advancing your career in technology!**`
  }

  // Placement queries
  if (lowerMessage.includes('placement') || lowerMessage.includes('job') || lowerMessage.includes('career') || lowerMessage.includes('recruit')) {
    return `## Career Guidance & Placements

SIES College has a dedicated **Career Guidance and Placement Cell** to support students.

### Placement Support:
- Career counseling and guidance
- Placement assistance
- Industry interaction programs
- Skill development initiatives

### For Placement Information:
- **Contact the college:** ${collegeData.contact.email}
- **Phone:** ${collegeData.contact.phone}
- **Visit:** ${collegeData.contact.website}

### Additional Support:
The college also has various clubs and committees (Rotaract, NSS) that help develop soft skills and leadership qualities, enhancing employability.

**For specific placement statistics and company tie-ups, please contact the college directly.**`
  }

  // Default response
  return `Thank you for your question! I'm here to help with information about SIES Autonomous Science College admissions.

### I can help you with:
- **Courses offered** (UG & PG programs)
- **Admission process** and requirements
- **Eligibility criteria** for different courses
- **College facilities** and infrastructure
- **Contact information** for admission queries
- **Fee details** and prospectus information

### Quick Information:
**College:** ${collegeData.name}
**Accreditation:** ${collegeData.accreditation}
**Contact:** ${collegeData.contact.admissionEmail} | ${collegeData.contact.admissionPhone}
**Website:** ${collegeData.contact.website}

**Please ask me about any specific aspect of admissions, courses, or college facilities!**`
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message' },
        { status: 400 }
      )
    }

    const response = generateResponse(message)

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
