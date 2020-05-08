import React, { Component } from 'react'
import { matchPath } from 'react-router'
import { withRouter } from 'react-router-dom';

export default class AboutUsDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
          id: 1,
          services: [
              {
                id:1,
                url: '/about/web-design',
                image: 'https://cdn.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9.png',
                head: 'Web Design',
                para: 'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. Web design used to be focused on designing websites for desktop browsers; however, since the mid-2010s, design for mobile and tablet browsers has become ever-increasingly important.'
              },
              {
                id:2,
                url: '/about/web-development',
                image: 'https://www.creative-solutions.mx/wp-content/uploads/2019/02/astrologer.jpg',
                head: 'Web Development',
                para: 'Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web-based internet applications (web apps), electronic businesses, and social network services. A more comprehensive list of tasks to which web development commonly refers, may include web engineering, web design, web content development, client liaison, client-side/server-side scripting, web server and network security configuration, and e-commerce development.'
              },
              {
                id:3,
                url: '/about/seo',
                image: 'https://mangools.com/blog/wp-content/uploads/2019/07/learn-seo-new-featured-1280x720.png',
                head: 'Search Engine Optimisation',
                para: 'If you own, manage, monetize, or promote online content via Google Search, this guide is meant for you. You might be the owner of a growing and thriving business, the webmaster of a dozen sites, the SEO specialist in a Web agency or a DIY SEO ninja passionate about the mechanics of Search : this guide is meant for you. If youre interested in having a complete overview of the basics of SEO according to our best practices, you are indeed in the right place. This guide wont provide any secrets thatll automatically rank your site first in Google (sorry!), but following the best practices outlined below will hopefully make it easier for search engines to crawl, index and understand your content.'
              },
              {
                id:3,
                url: '/about/ppc',
                image: 'https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/7-signs-your-ppc-program-is-being-mismanaged-5e7a8a5c5d561-1520x800.jpeg',
                head: 'Pay Per Click',
                para: 'PPC stands for pay-per-click, a model of internet marketing in which advertisers pay a fee each time one of their ads is clicked. Essentially, it’s a way of buying visits to your site, rather than attempting to “earn” those visits organically.'
              },
              {
                id:3,
                url: '/about/content-writting',
                image: 'https://www.techforest.in/assets/img/content-writing-program.webp',
                head: 'Content Writting',
                para: 'Content writing services (also known as online content writing services and content marketing services) is a category of work that first surfaced in the early 1990s, due to an exponential rise in online activities.[1] Content writing aims to provide the "speech" to a website, summarising what the website is about and explaining what the site offers to potential customers.The availability of the global job market means content writing services vary in the paid-for services on offer. In general, most content writing organizations offer the writing of article copy, blog posts, press releases, web page information, product descriptions and other corporate material. While different pricing scales apply to these categories (depending on the company), most providers charge a fixed "by the word" rate.'
              },
              {
                id:3,
                url: '/about/smo',
                image: 'https://www.thirdlaw.in/wp-content/uploads/2020/02/SMO.jpg',
                head: 'Social media optimization',
                para: 'Social media optimization (SMO) is the use of a number of outlets and communities to generate publicity to increase the awareness of a product, service brand or event. Types of social media involved include RSS feeds, social news and bookmarking sites, as well as social networking sites, such as Facebook, Instagram,Twitter, video sharing websites and blogging sites. SMO is similar to search engine optimization, in that the goal is to generate web traffic and increase awareness for a website. In general, social media optimization refers to optimizing a website and its content to encourage more users to use and share links to the website across social media and networking sites. SMO also refers to software tools that automate this process, or to website experts who undertake this process for clients.'
              },
              
          ],
        };
      }


    
    render() {
        const murl = this.props.location.pathname;
        

        return (
            <>
            {this.state.services.filter(person => person.url == murl).map(filteredPerson => (
        
            <div className="container mt-5">
            <section className="text-justify">
            <h2 className="font-weight-bold">{filteredPerson.head}</h2>
            <figure className="figure">
            <img src={filteredPerson.image} className="figure-img img-fluid z-depth-1" alt="..." />
            </figure>
            <p>{filteredPerson.para}</p>
            </section><br/>
            <button className="btn btn-sm float-right btn-primary icon-left" onClick={this.props.history.goBack}>Go Back</button>
            <br/><br/><br/><br/><br/>
            </div>
            
            ))} 
            </>
        )
    }
}
