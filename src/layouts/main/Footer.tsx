import React from 'react';
import { SiGithub, SiHackerrank, SiLinkedin, SiLeetcode } from 'react-icons/si';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-primary-foreground bg-primary dark:bg-black py-12 animate-fade-in">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <img
                        src="/TechForEverybody.svg"
                        alt="TechForEverybody Logo"
                        className="w-32 h-auto mx-auto md:mx-0 animate-spin-slow"
                    />
                    <h2 className="text-2xl font-bold">TechForEverybody</h2>
                    <p className="text-sm">
                        I’m Shivkumar Chauhan, a Full-Stack Engineer specializing in React, Next.js,
                        Node.js, and AI/ML. I build performant, accessible, and beautifully designed
                        web applications.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-start space-y-4">
                    <h3 className="text-xl font-semibold">Connect with me</h3>
                    <div className="flex space-x-4 text-2xl">
                        <a
                            href="https://github.com/TechForEverybody"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-transform hover:scale-110"
                        >
                            <SiGithub />
                        </a>
                        <a
                            href="https://www.hackerrank.com/Shiva995"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-transform hover:scale-110"
                        >
                            <SiHackerrank />
                        </a>
                        <a
                            href="https://linkedin.com/in/shiva995"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-transform hover:scale-110"
                        >
                            <SiLinkedin />
                        </a>
                        <a
                            href="https://leetcode.com/Shiva995"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-transform hover:scale-110"
                        >
                            <SiLeetcode />
                        </a>
                    </div>
                </div>

                {/* <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Subscribe</h3>
                    <form className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        <Button type="submit" className="w-full sm:w-auto">
                            Subscribe
                        </Button>
                    </form>
                </div> */}
            </div>

            <div className="border-t border-border mt-8 pt-6 text-center text-sm text-white">
                &copy; {currentYear} TechForEverybody. All rights reserved.
            </div>
        </footer>
    );
}
