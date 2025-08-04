import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';
import { GoContainer } from 'react-icons/go';


interface Project {
    name: string;
    fullName: string;
    stars: number;
    forks: number;
    technologies: string[];
    description: string;
    backgroundImage: string | null;
    githubUrl: string;
}

const ProjectsPage = () => {
    const projects: Project[] = [
        {
            name: 'Music-Disc',
            fullName: 'hmes98318/Music-Disc',
            stars: 136,
            forks: 105,
            technologies: ['Node.js', 'TypeScript'],
            description: 'A Discord music bot, supports YouTube, Spotify, SoundCloud, Deezer streams and web dashboard.',
            backgroundImage: '/img/music-disc.png',
            githubUrl: 'https://github.com/hmes98318/Music-Disc'
        },
        {
            name: 'LavaShark',
            fullName: 'hmes98318/LavaShark',
            stars: 5,
            forks: 2,
            technologies: ['Node.js', 'TypeScript'],
            description: 'A lightweight Lavalink client built with Node.js',
            backgroundImage: '/img/lavashark-logo.svg',
            githubUrl: 'https://github.com/hmes98318/LavaShark'
        },
        {
            name: 'palworld-docker',
            fullName: 'hmes98318/palworld-docker',
            stars: 37,
            forks: 6,
            technologies: ['Linux', 'Container'],
            description: 'Docker container that can easily run Palworld dedicated server',
            backgroundImage: null,
            githubUrl: 'https://github.com/hmes98318/palworld-docker'
        },
        {
            name: 'nextcloud-custom',
            fullName: 'hmes98318/nextcloud-custom',
            stars: 0,
            forks: 0,
            technologies: ['Linux', 'Container', 'Kubernetes'],
            description: '使用 Nextcloud 官方 image 修改的容器',
            backgroundImage: '/img/nextcloud-logo.png',
            githubUrl: 'https://github.com/hmes98318/nextcloud-custom'
        },
        {
            name: 'tomradius',
            fullName: 'hmes98318/tomradius',
            stars: 1,
            forks: 0,
            technologies: ['Node.js', 'TypeScript'],
            description: 'FreeRADIUS 認證系統管理平台',
            backgroundImage: '/img/radius-manager.png',
            githubUrl: 'https://github.com/hmes98318/tomradius'
        }
    ];

    const ProjectCard = ({ project }: { project: Project }) => {
        const [imageError, setImageError] = useState(false);

        return (
            <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg overflow-hidden hover:border-[#007acc] hover:shadow-lg hover:shadow-[#007acc]/20 transition-all duration-700 ease-out group">
                {/* Project Image/Background */}
                <div className="h-32 md:h-48 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] relative overflow-hidden border-b border-[#3c3c3c] transition-all duration-700 ease-out">
                    {project.backgroundImage && !imageError ? (
                        <div className="relative w-full h-full">
                            <Image
                                src={project.backgroundImage}
                                alt={`${project.name} background`}
                                fill
                                className={`transition-all duration-700 ease-out ${project.backgroundImage.endsWith('.svg')
                                    ? 'object-contain p-4 md:p-6'
                                    : 'object-cover'
                                    }`}
                                style={{
                                    filter: project.backgroundImage.endsWith('.svg')
                                        ? 'brightness(1.1) contrast(1.2) saturate(1.1)'
                                        : 'brightness(0.8) contrast(1.1) saturate(1.2)'
                                }}
                                onError={() => setImageError(true)}
                                unoptimized={project.backgroundImage.endsWith('.svg')}
                            />
                            {/* 深色遮罩讓文字更清晰 - SVG 使用較淺的遮罩 */}
                            {/* <div className={`absolute inset-0 transition-all duration-700 ease-out ${project.backgroundImage.endsWith('.svg')
                                    ? 'bg-gradient-to-t from-black/40 via-black/20 to-black/10 group-hover:from-black/30 group-hover:via-black/15 group-hover:to-black/5'
                                    : 'bg-gradient-to-t from-black/60 via-black/30 to-black/20 group-hover:from-black/50 group-hover:via-black/20 group-hover:to-black/10'
                                }`} /> */}
                            {/* 專案名稱覆蓋在圖片上 */}
                            {/* <div className="absolute bottom-3 left-3 right-3">
                                <h3 className="text-white font-bold text-sm md:text-base drop-shadow-lg truncate group-hover:text-[#007acc] transition-colors duration-700 ease-out">
                                    {project.name}
                                </h3>
                            </div> */}
                        </div>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#333333] to-[#2a2a2a] transition-all duration-700 ease-out">
                            <div className="text-center">
                                <GoContainer className="text-4xl md:text-6xl text-[#ffffff] group-hover:text-[#1e90ff] transition-all duration-700 ease-out mb-2 w-12 h-12 md:w-16 md:h-16 mx-auto" />
                                {/* <h3 className="text-white font-semibold text-sm md:text-base group-hover:text-[#007acc] transition-colors duration-700 ease-out">
                                    {project.name}
                                </h3> */}
                            </div>
                        </div>
                    )}
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-6 transition-all duration-700 ease-out">
                    <div className="flex items-center justify-between mb-3">
                        <div className="min-w-0 flex-1">
                            <p className="text-sm md:text-base text-[#969696] truncate group-hover:text-[#cccccc] transition-colors duration-700 ease-out">{project.fullName}</p>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center space-x-2 md:space-x-3 text-xs md:text-sm text-[#969696] flex-shrink-0 ml-2 group-hover:text-[#cccccc] transition-colors duration-700 ease-out">
                            <div className="flex items-center space-x-1">
                                <AiOutlineStar className="w-3 h-3 md:w-4 md:h-4 transition-transform duration-700 ease-out" />
                                <span>{project.stars}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <AiOutlineFork className="w-3 h-3 md:w-4 md:h-4 transition-transform duration-700 ease-out" />
                                <span>{project.forks}</span>
                            </div>
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 bg-[#333333] border border-[#3c3c3c] rounded text-xs text-[#cccccc] hover:bg-[#404040] hover:border-[#007acc] transition-all duration-300 ease-out"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Description */}
                    <p className="text-[#cccccc] text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3 group-hover:text-white transition-colors duration-700 ease-out">
                        {project.description}
                    </p>

                    {/* GitHub Link */}
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 md:px-4 py-2 bg-[#007acc] hover:bg-[#1e90ff] hover:shadow-md hover:shadow-[#007acc]/30 text-white text-xs md:text-sm rounded transition-all duration-300 ease-out"
                    >
                        <svg className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View on GitHub
                    </a>
                </div>
            </div>
        );
    };

    return (
        <div className="h-full w-full overflow-auto bg-[#1e1e1e] text-[#cccccc]">
            <div className="max-w-6xl mx-auto p-4 md:p-6 min-h-full">
                {/* Header */}
                <div className="mb-6 md:mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">My Projects</h1>
                    <p className="text-[#969696] text-sm md:text-lg">
                        {`A collection of open-source projects I've been working on`}
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>

                {/* Summary Stats */}
                {/* <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-4 md:p-6 mb-6 md:mb-8">
                    <h2 className="text-lg md:text-xl font-semibold text-white mb-4">📊 Project Summary</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                            <div className="text-xl md:text-2xl font-bold text-[#007acc]">
                                {projects.reduce((sum, project) => sum + project.stars, 0)}
                            </div>
                            <div className="text-xs md:text-sm text-[#969696]">Total Stars</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl md:text-2xl font-bold text-[#007acc]">
                                {projects.reduce((sum, project) => sum + project.forks, 0)}
                            </div>
                            <div className="text-xs md:text-sm text-[#969696]">Total Forks</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl md:text-2xl font-bold text-[#007acc]">
                                {projects.length}
                            </div>
                            <div className="text-xs md:text-sm text-[#969696]">Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl md:text-2xl font-bold text-[#007acc]">
                                {[...new Set(projects.flatMap(p => p.technologies))].length}
                            </div>
                            <div className="text-xs md:text-sm text-[#969696]">Technologies</div>
                        </div>
                    </div>
                </div> */}

                {/* Call to Action */}
                {/* <div className="text-center p-4 md:p-6 bg-[#252526] border border-[#3c3c3c] rounded-lg">
                    <h3 className="text-base md:text-lg font-semibold text-white mb-2">Want to collaborate?</h3>
                    <p className="text-[#969696] mb-4 text-sm md:text-base">
                        I'm always interested in working on exciting projects and contributing to open source.
                    </p>
                    <a
                        href="https://github.com/hmes98318"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-[#007acc] hover:bg-[#1e90ff] text-white rounded transition-colors duration-300 text-sm md:text-base"
                    >
                        <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Visit My GitHub
                    </a>
                </div> */}
            </div>
        </div>
    );
};

export default ProjectsPage;
