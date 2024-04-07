import React from 'react'
import comp1 from "../assets/company 1.jpg";
import comp2 from "../assets/Company 2.jpg";
import comp3 from "../assets/company 3.png";
import eng1 from "../assets/engineering 1.webp";
import eng2 from "../assets/engineering 2.jpeg";
import eng3 from "../assets/engineering 3.png";
import eng4 from "../assets/engineering 4.png";
import eng5 from "../assets/engineering 5.jpg";
import growth1 from "../assets/growth 1.jpeg";
import growth2 from "../assets/growth 2.jpeg";
import growth3 from "../assets/growth 3.jpeg";
import { Cards } from './Cards';
import { BigCard } from './BigCard';


let Data = [
  {
      Image: comp1,
      Fied: "Company",
      Title: "Here at RevenueCat, Employees are Customers Too",
      Description: "Sharing app building ideas in our employee App club",
      Author: "Will Taylor",
      Date: "May 31, 2022"
  },

  {
      Image: growth1,
      Fied: "Growth",
      Title: "App Store Optimization Guide for Subscription Apps",
      Description: "Learn how to boost your app's visibility and more",
      Author: "Thomas Kriebernegg",
      Date: "May 30, 2022"
  },

  {
      Image: eng1,
      Fied: "Engineering",
      Title: "Account deletion rules on the App Store",
      Description: "Everything you need to know about the new rule",
      Author: "Corey Rabazinski",
      Date: "May 26, 2022"
  },

  {
      Image: comp2,
      Fied: "Company",
      Title: "How We Work Remotely at RevenueCat",
      Description: "We're a little different than your average 9-5 job",
      Author: "Rachel Wright",
      Date: "May 26, 2022"
  },

  {
      Image: eng2,
      Fied: "Engineering",
      Title: "Google I/O 2022 Announcements",
      Description: "How the new features and updated play Console will help grow your app business",
      Author: "Maddie Beyl",
      Date: "May 17, 2022"
  },

  {
      Image: eng3,
      Fied: "Engineering",
      Title: "Introducing our Firebase Extension",
      Description: "Firebase developers get plug and play in-app purchase infrastructure",
      Author: "Francie Fernandes",
      Date: "May 11, 2022"
  },

  {
      Image: comp2,
      Fied: "Company",
      Title: "Meet the New RevenueCat SDK",
      Description: "Our biggest release to date!",
      Author: "Andy Boedo",
      Date: "April 22, 2022"
  },

  {
      Image: eng4,
      Fied: "Engineering",
      Title: "Using RevenueCat with Expo's Managed Workflow",
      Description: "The getting started guide",
      Author: "Josh Holtz",
      Date: "April 18, 2022"
  },

  {
      Image: eng5,
      Fied: "Engineering",
      Title: "How we test SDK's at RevenueCat",
      Description: "All about testing and updating our ios SDK",
      Author: "Andy Boedo",
      Date: "April 12, 2022"
  },

  
];

let Data2 = [
    {
        Image: growth2,
        Fied: "Growth",
        Title: "Early Stage Subscription App Growth Stack",
        Description: "A scaled-down MVP of the Mobile Growth Stack to help mobile developers get started",
        Author: "Thomas Petit",
        Date: "April 02, 2022"
    },
  
    {
        Image: growth3,
        Fied: "Growth",
        Title: "How AllTrails Leveraged Product-Channel Fit To Scale Its Subscription",
        Description: "Growth and investment takeaways from a profitable app",
        Author: "David Barnard",
        Date: "March 15, 2022"
    },
  
    {
        Image: comp3,
        Fied: "Engineering",
        Title: "Hybrid SDK Architecture at RevenueCat",
        Description: "Adding a layer to reduce complexity",
        Author: "Maddie Beyl",
        Date: "March 15, 2022"
    },
];

export const CardContainer = () => {
  return (
    <div className="flex flex-wrap justify-center">
        
        {Data.map((item) => {
            return (
                <Cards Image={item.Image} Fied={item.Fied} Title={item.Title} Description={item.Description} Author={item.Author} Date={item.Date} />
            )
        })}
        <BigCard/>
        {Data2.map((item) => {
            return (
                <Cards Image={item.Image} Fied={item.Fied} Title={item.Title} Description={item.Description} Author={item.Author} Date={item.Date} />
            )
        })}
    </div>
  )
}
