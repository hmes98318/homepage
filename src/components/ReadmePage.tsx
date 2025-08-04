import Image from 'next/image';


const ReadmePage = () => {
    return (
        <div className="h-full w-full overflow-auto bg-[#1e1e1e] text-[#cccccc]">
            <div className="max-w-6xl mx-auto p-6 md:p-8 lg:p-10 min-h-full">
                {/* Header Section - Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-12">
                    {/* Left Column - Introduction and Tech Stack */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Name and Introduction */}
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                {`Hi, I'm Pofu 👋`}
                            </h1>
                            <p className="text-lg md:text-xl text-[#969696] leading-relaxed">
                                {`Full-stack Developer & Infrastructure Engineer`}
                            </p>
                            {/* <div className="flex items-center text-base">
                                <span className="mr-2 text-[#969696]">🔗 GitHub:</span>
                                <a 
                                    href="https://github.com/hmes98318" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-[#007acc] hover:text-[#1e90ff] underline font-medium transition-colors duration-300"
                                >
                                    hmes98318
                                </a>
                            </div> */}
                            <p className="text-[#cccccc] leading-relaxed text-base md:text-lg max-w-3xl">
                                {`I'm a passionate developer with expertise in both frontend and backend technologies.`}
                                {`I love building scalable applications and managing infrastructure to support modern development workflows.`}
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white">{`🛠️ Tech Stack`}</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg md:text-xl font-medium mb-4 text-[#ffd700]">{`Programming Languages`}</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {['Node.js', 'TypeScript', 'Golang', 'Python'].map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 bg-[#333333] border border-[#3c3c3c] rounded-lg text-sm md:text-base font-medium hover:bg-[#404040] hover:border-[#007acc] hover:shadow-lg hover:shadow-[#007acc]/20 transition-all duration-300 cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg md:text-xl font-medium mb-4 text-[#ffd700]">{`Infrastructure & DevOps`}</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {['TrueNAS', 'Linux', 'ProxmoxVE', 'FortiGate', 'Docker', 'Kubernetes'].map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 bg-[#333333] border border-[#3c3c3c] rounded-lg text-sm md:text-base font-medium hover:bg-[#404040] hover:border-[#007acc] hover:shadow-lg hover:shadow-[#007acc]/20 transition-all duration-300 cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Avatar */}
                    <div className="lg:col-span-1 flex justify-center lg:justify-center items-start lg:items-center">
                        <div className="relative mt-6 lg:mt-0">
                            {/* <div className="w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden border-3 border-[#007acc] shadow-xl hover:border-[#1e90ff] hover:shadow-[#007acc]/30 transition-all duration-500 hover:animate-spin"> */}
                            <div className="w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden border-3 border-[#007acc] shadow-xl hover:border-[#1e90ff] transition-all duration-500 hover:animate-spin">
                                <Image
                                    src="/header.png"
                                    alt="Pofu Avatar"
                                    width={208}
                                    height={208}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                            {/* Optional decorative elements */}
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#007acc] rounded-full border-2 border-[#1e1e1e] animate-pulse"></div>
                            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#ffd700] rounded-full border-2 border-[#1e1e1e]"></div>
                        </div>
                    </div>
                </div>

                {/* GitHub Contribution Graph */}
                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">{`GitHub Activity`}</h2>
                    <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-6 hover:border-[#007acc] hover:shadow-lg hover:shadow-[#007acc]/10 transition-all duration-300">
                        <div>
                            {/* <h3 className="text-base font-medium mb-4 text-[#969696]">Contribution Snake Animation</h3> */}
                            <div className="bg-[#1e1e1e] rounded-lg p-6 overflow-hidden">
                                <picture>
                                    <source
                                        media="(prefers-color-scheme: dark)"
                                        srcSet="https://raw.githubusercontent.com/hmes98318/hmes98318/output/github-contribution-grid-snake-dark.svg"
                                    />
                                    <img
                                        src="https://raw.githubusercontent.com/hmes98318/hmes98318/output/github-contribution-grid-snake-dark.svg"
                                        alt="GitHub Contribution Snake"
                                        className="w-full h-auto max-w-full"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">{`About Me`}</h2>
                    <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-6 md:p-8 hover:border-[#007acc] hover:shadow-lg hover:shadow-[#007acc]/10 transition-all duration-300">
                        <div className="prose prose-invert max-w-none space-y-4">
                            <p className="text-[#cccccc] leading-relaxed text-base md:text-lg">
                                {`When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                                or fine-tuning my homelab setup with the latest DevOps tools. I believe in continuous learning and
                                staying up-to-date with industry trends.`}
                            </p>
                            <p className="text-[#cccccc] leading-relaxed text-base md:text-lg">
                                {`My experience spans from building responsive web applications to designing and implementing
                                robust infrastructure solutions. I enjoy the challenge of optimizing performance, ensuring
                                security, and creating maintainable code that scales with business needs.`}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="mb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-[#252526] to-[#1e1e1e] border border-[#3c3c3c] rounded-lg p-6 text-center hover:border-[#007acc] hover:shadow-lg hover:shadow-[#007acc]/20 hover:scale-105 transition-all duration-300 group">
                            <div className="text-3xl md:text-4xl font-bold text-[#007acc] mb-3 group-hover:text-[#1e90ff] transition-colors">5+</div>
                            <div className="text-sm md:text-base text-[#969696] group-hover:text-[#cccccc] transition-colors font-medium">Years Experience</div>
                        </div>
                        <div className="bg-gradient-to-br from-[#252526] to-[#1e1e1e] border border-[#3c3c3c] rounded-lg p-6 text-center hover:border-[#007acc] hover:shadow-lg hover:shadow-[#007acc]/20 hover:scale-105 transition-all duration-300 group">
                            <div className="text-3xl md:text-4xl font-bold text-[#007acc] mb-3 group-hover:text-[#1e90ff] transition-colors">200+</div>
                            <div className="text-sm md:text-base text-[#969696] group-hover:text-[#cccccc] transition-colors font-medium">GitHub Stars</div>
                        </div>
                        <div className="bg-gradient-to-br from-[#252526] to-[#1e1e1e] border border-[#3c3c3c] rounded-lg p-6 text-center hover:border-[#007acc] hover:shadow-lg hover:shadow-[#007acc]/20 hover:scale-105 transition-all duration-300 group sm:col-span-2 lg:col-span-1">
                            <div className="text-3xl md:text-4xl font-bold text-[#007acc] mb-3 group-hover:text-[#1e90ff] transition-colors">10+</div>
                            <div className="text-sm md:text-base text-[#969696] group-hover:text-[#cccccc] transition-colors font-medium">Open Source Projects</div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="... border-t pt-8 pb-6 text-[#969696] text-center whitespace-nowrap overflow-x-auto">
                    <div className="flex flex-col items-center space-y-4">
                        <p className="text-lg md:text-xl font-medium">
                            {`💡 Always learning, always building`}
                        </p>
                        <p className="text-sm md:text-base max-w-xl opacity-75 leading-relaxed">
                            {`"The best way to predict the future is to create it." - Peter Drucker`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadmePage;
