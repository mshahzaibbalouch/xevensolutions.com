import React from 'react';
import ComponentsHeader from '../../component/ComponentsHeader';
import { Container, Row, Col } from 'react-bootstrap';

import image from '../../component/img/Blog/blog-banner-2.png';
import image_title from '../../component/img/Blog/OurBlogTitle.png';
import BlogCards from '../../component/BlogCards';


import card1_image from '../../component/img/Blog/representations-user-experience--scaled-thegem-blog-masonry.jpg';
import card2_image from '../../component/img/Blog/Staff-Augmentation-scaled-thegem-blog-masonry.jpg';
import card3_image from '../../component/img/Blog/Mobile-app-development-scaled-thegem-blog-masonry.jpg';
import card4_image from '../../component/img/Blog/real-estate-CRM-scaled-thegem-blog-masonry.jpg';
import card5_image from '../../component/img/Blog/Web-development-scaled-thegem-blog-masonry.jpg';
import card6_image from '../../component/img/Blog/Devops-3-scaled-thegem-blog-masonry.jpg';
import card7_image from '../../component/img/Blog/AI-Chatbot-1-scaled-thegem-blog-masonry.jpg';
import card8_image from '../../component/img/Blog/ai-cloud-concept-scaled-thegem-blog-masonry.jpg';
import card9_image from '../../component/img/Blog/real-estate-CRM-scaled-thegem-blog-masonry.jpg';
import card10_image from '../../component/img/Blog/Discovery-workshop-1-scaled-thegem-blog-masonry.jpg';
import card11_image from '../../component/img/Blog/Mental-health-condition-scaled-thegem-blog-masonry.jpg';
import card12_image from '../../component/img/Blog/baby-boomer-scaled-thegem-blog-masonry.jpg';
import card13_image from '../../component/img/Blog/4-scaled-thegem-blog-masonry.jpg';
import card14_image from '../../component/img/Blog/1-1-scaled-thegem-blog-masonry.jpg';
import card15_image from '../../component/img/Blog/Devops-scaled-thegem-blog-masonry.jpg';



function page9() {

  const card1 = {
    image: card1_image,
    link : '/news-blog/what-are-the-automation-tools-used-in-devops',
    title: 'THE IMPORTANCE OF SECURITY IN MOBILE APP DEVELOPMENT SERVICES',
    discription: 'Mobile app development services must prioritize security as a top priority because it is a critical component.'
  }
  const card2 = {
    image: card2_image,
    link : '/news-blog/what-are-the-automation-tools-used-in-devops',
    title: 'STAFF AUGMENTATION VS OUTSOURCING A DEDICATED TEAM',
    discription: 'Staff augmentation consulting can help businesses to enhance their capabilities, control costs, and gain a competitive advantage.'
  }
  const card3 = {
    image: card3_image,
    link : '/news-blog/what-are-the-automation-tools-used-in-devops',
    title: 'TOP 10 PROGRAMMING LANGUAGES FOR MOBILE APP DEVELOPMENT',
    discription: 'In the current digital era, developing mobile apps has become essential for businesses to thrive.'
  }
  const card4 = {
    image: card4_image,
    link : '/news-blog/what-are-the-automation-tools-used-in-devops',
    title: 'STREAMLINING YOUR SALES PROCESS WITH CRM FOR REAL ESTATE AGENTS',
    discription: 'As a real estate agent, you are no stranger to the challenges that come with managing a lengthy and complex sales process.'
  }
  const card5 = {
    image: card5_image,
    link : '/news-blog/what-are-the-automation-tools-used-in-devops',
    title: 'WHY CUSTOM SOFTWARE DEVELOPMENT IS CRUCIAL FOR BUSINESSES',
    discription: 'The world of business is constantly evolving, and in order to keep up, companies need to adapt to new technologies and find innovative ways to improve their operations. This is where custom software development comes in.'
  }
  const card6 = {
    image: card6_image,
    link : '/news-blog/what-are-the-automation-tools-used-in-devops',
    title: 'WHAT TECHNOLOGIES DO I NEED TO KNOW FOR DEVOPS?',
    discription: 'DevOps is the integration of developers, Operations and Sys Admins into the same team. It"s a way to get your software from the idea stage through testing and launch into production in a repeatable process.'
  }
  const card7 = {
    image: card7_image,
    link : '/news-blog/what-are-the-automation-tools-used-in-devops',
    title: 'BENEFITS OF AI CHATBOTS FOR AUTOMATING CUSTOMER EXPERIENCE',
    discription: 'The best chatbots not only improve service through high levels of automation but also develop better relationships with end users, creating an overall improved CX.'
  }
  const card8 = {
    image: card8_image,
    link : '/news-blog/what-are-the-automation-tools-used-in-devops',
    title: 'THE IMPORTANCE OF ETHICS IN AI, MACHINE LEARNING',
    discription: "In today's world, Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL) are quickly becoming major players in the technology industry."
  }
  const card9 = {
    image: card9_image,
    link : '/news-blog/what-are-the-automation-tools-used-in-devops',
    title: '6 BEST REAL ESTATE CRM SOFTWARE FOR 2023',
    discription: 'A real estate customer relationship management (CRM) system is a tool used by real estate agents to better manage and streamline their business operations.'
  }
  const card10 = {
    image: card10_image,
    link : '/news-blog/what-are-the-automation-tools-used-in-devops',
    title: 'WHAT IS A DISCOVERY WORKSHOP AND HOW TO FACILITATE IT?',
    discription: 'Professional design discovery workshops allow organizations to review existing strategies and explore how the design process can help them reach their goals.'
  }
  const card11 = {
    image: card11_image,
    link : '/news-blog/what-are-the-automation-tools-used-in-devops',
    title: 'TOP 6 MENTAL HEALTH SOFTWARE SOLUTIONS IN 2023',
    discription: 'Mental health software has become an essential component of modern healthcare. With technological advancements, it is no surprise that Mental Health Software Companies have emerged to capitalize on the potential of this sector.'
  }
  const card12 = {
    image: card12_image,
    link : '/news-blog/what-are-the-automation-tools-used-in-devops',
    title: 'WHY DO BABY BOOMERS DON’T UNDERSTAND TECHNOLOGY?',
    discription: 'Baby boomers are the generation that grew up without a smartphone in their pockets or tablets on their laps so it"s understandable why they may experience difficulty with adapting to the new technological advancements.'
  }
  const card13 = {
    image: card13_image,
    link : '/news-blog/what-are-the-automation-tools-used-in-devops',
    title: 'BEST PRACTICES FOR MANAGING STAFF AUGMENTATION TEAMS',
    discription: 'Staff augmentation is the process of adding additional resources to an existing team in order to supplement their skills or expertise.'
  }
  const card14 = {
    image: card14_image,
    link : '/news-blog/what-are-the-automation-tools-used-in-devops',
    title: 'WHAT ARE THE AUTOMATION TOOLS USED IN DEVOPS?',
    discription: 'The goal of DevOps is to increase the speed and quality of software delivery, to achieve this, DevOps relies heavily on the use of various tools.'
  }
  const card15 = {
    image: card15_image,
    link : '/news-blog/what-are-the-automation-tools-used-in-devops',
    title: 'BENEFITS OF HIRING AN EXPERT DEVOPS CONSULTANT',
    discription: 'DevOps consulting is a booming industry offering businesses the chance to revolutionize their software development cycle.'
  }
  const cards = {
    Card1: card1,
    Card2: card2,
    Card3: card3,
    Card4: card4,
    Card5: card5,
    Card6: card6,
    Card7: card7,
    Card8: card8,
    Card9: card9,
    Card10: card10,
    Card11: card11,
    Card12: card12,
    Card13: card13,
    Card14: card14,
    Card15: card15
  }



  const Header = {
    bg_image: image_title,
    s_image: image,
    description: 'Find out our latest news and blogs about our products and services',
    color_blue: 'NEWS & BLOGS',
    color_white: 'LATEST'
  }

  return (
    <div>
      <ComponentsHeader Header={Header} />
      <BlogCards Cards={cards} />
      <Row className='text-center'>
          <Col>
            <div className="container">
              <a href='/news-blog/page/8' className='m-3'><button type='button'> &#x2039; </button></a>
              <a href='/news-blog' className='m-3'><button type='button'>1</button></a>
              ...
              <a href='/news-blog/page/8' className='m-3'><button type='button'>8</button></a>
              <a href='/news-blog/page/9' className='m-3'><button type='button' style={{ backgroundColor: '#000000', color: '#ffffff' }}>9</button></a>
              <a href='/news-blog/page/10' className='m-3'><button type='button'>10</button></a>
       
              <a href='/news-blog/page/11' className='m-3'><button type='button'>11</button></a>
              <a href='/news-blog/page/10' className='m-3'><button type='button'> &#x203A;</button></a>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default page9;