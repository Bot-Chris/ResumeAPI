const express = require('express');
const app = express();
const port = 3000; // Choose the desired port number
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
    

app.get('/resume', (req, res) => {
    // Logic to generate or retrieve the resume data
    const resume = {
        name: 'Chris Hampton',
        address: '630 N Vel R Phillips Ave.\nMilwaukee, WI 53233',
        phone: '(708) 776-3918',
        email: 'chrishampton1221@gmail.com',
        experience: [
          {
            company: 'Informitics',
            location: 'Oak Park, IL',
            position: 'Software Development Intern',
            date: 'June 2020 - December 2022',
            responsibilities: [
              'Developed backend for the web application Cheer-a-Beer',
              'Managed database with Azure',
              'Designed board displacement for on-site use at local businesses'
            ]
          },
          {
            company: 'Association House of Chicago',
            location: 'Chicago, IL',
            position: 'Information Systems Intern',
            date: 'June 2019 - August 2019',
            responsibilities: [
              'Specialized in iso imaging for Windows OS',
              'Troubleshot technical issues for employees'
            ]
          },
          {
            company: 'Marquette ACM Programming Competition',
            location: 'Milwaukee, WI',
            position: 'Volunteer',
            date: '2020 - 2023',
            responsibilities: [
              'Proctored high school students taking part in competition'
            ]
          }
        ],
        education: [
          {
            institution: 'Marquette University',
            location: 'Milwaukee, WI',
            degree: 'Bachelor of Science in Computer Science',
            date: 'August 2019 - May 2023'
          },
          {
            institution: 'Oak Park-River Forest High School',
            location: 'Oak Park, IL',
            degree: 'High School Diploma',
            date: 'August 2015 - June 2019',
            additionalInfo: 'Accepted as a mentor to incoming freshmen in their leadership program'
          }
        ],
        projects: [
          {
            title: 'MKE Black',
            description: 'Senior Design Project',
            details: 'Developed a web application that highlights black owned businesses in various cities.'
          }
        ],
        skills: [
          'Proficient in Java, Python, C++, and JavaScript',
          'Experience with software development methodologies such as Agile and Scrum',
          'Experience with version control systems like Git and Subversion',
          'Familiarity with database management systems, including MySQL',
          'Knowledge of web development technologies such as HTML, CSS, and React',
          'Familiarity with mobile app development using Android Studio and React Native',
          'Strong understanding of algorithms and data structures',
          'Experience with operating systems such as Linux and Windows',
          'Familiarity with cloud computing platforms like AWS and Azure'
        ]
      };
      
  
    res.json(resume);
  });
  

