import React from 'react'

// import components 
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className='relative section-title before:content-portfolio before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>My latest work</h2>
                <p className='text-gray-500 subtitle'>
                🚀 Welcome to my world of creativity and innovation! In this section, you'll find a curated collection of my diverse projects that showcase my passion, skills, and dedication. From captivating web designs to powerful software solutions, each project represents a unique journey of problem-solving and artistic expression. Explore my work and witness the fusion of technology and imagination at its best. 🎨💡👨‍💻

                  </p>
            </div>
            <Projects />
        </div>
    </section>
  )
}

export default Portfolio;