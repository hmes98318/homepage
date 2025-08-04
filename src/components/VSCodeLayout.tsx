'use client';

import { useState, useEffect } from 'react';
import { AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import { SiMarkdown, SiReact } from "react-icons/si";
import {
    VscExtensions,
    VscFiles,
    VscFolder,
    VscFolderOpened,
    VscSearch,
    VscChevronDown,
    VscChevronRight,
    VscWarning,
    VscError,
    VscSync,
    VscVscode,
    VscClose
} from "react-icons/vsc";
import { IoGitBranchOutline } from 'react-icons/io5';

import ReadmePage from './ReadmePage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';


interface FileItem {
    name: string;
    icon: React.ReactNode;
    content: string;
    isActive?: boolean;
}

interface VSCodeLayoutProps {
    children?: React.ReactNode;
}

const VSCodeLayout: React.FC<VSCodeLayoutProps> = () => {
    const [activeFile, setActiveFile] = useState('README.md');
    const [openTabs, setOpenTabs] = useState(['README.md']);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isPortfolioExpanded, setIsPortfolioExpanded] = useState(true);
    const [profileViews, setProfileViews] = useState<string>('0');

    // 獲取 Profile Views 計數
    useEffect(() => {
        const fetchProfileViews = async () => {
            try {
                const response = await fetch('/api/profile-views');
                const data = await response.json();
                setProfileViews(data.views);
            } catch (error) {
                console.error('Failed to fetch profile views:', error);
                setProfileViews('0');
            }
        };

        fetchProfileViews();
    }, []);

    const files: FileItem[] = [
        {
            name: 'README.md',
            icon: <SiMarkdown className="w-4 h-4" />,
            content: 'readme'
        },
        {
            name: 'projects.tsx',
            icon: <SiReact className="w-4 h-4" />,
            content: 'projects'
        },
        {
            name: 'contact.md',
            icon: <AiOutlineMail className="w-4 h-4" />,
            content: 'contact'
        }
    ];

    const sidebarIcons = [
        { icon: <VscFiles className="w-6 h-6" />, active: isSidebarOpen, onClick: () => setIsSidebarOpen(!isSidebarOpen) },
        { icon: <VscSearch className="w-6 h-6" />, active: false },
        { icon: <AiOutlineGithub className="w-6 h-6" />, active: false, onClick: () => window.open('https://github.com/hmes98318') },
        { icon: <VscExtensions className="w-6 h-6" />, active: false }
    ];

    const handleFileClick = (fileName: string) => {
        setActiveFile(fileName);
        if (!openTabs.includes(fileName)) {
            setOpenTabs([...openTabs, fileName]);
        }
    };

    const handleTabClose = (fileName: string) => {
        const newTabs = openTabs.filter(tab => tab !== fileName);
        setOpenTabs(newTabs);
        if (activeFile === fileName && newTabs.length > 0) {
            setActiveFile(newTabs[newTabs.length - 1]);
        } else if (newTabs.length === 0) {
            setActiveFile('');
        }
    };

    return (
        <div className="h-screen w-screen flex flex-col bg-[#1e1e1e] text-[#cccccc] font-mono fixed inset-0">
            {/* Main Layout Container */}
            <div className="flex flex-1 min-h-0">
                {/* Activity Bar */}
                <div className="w-12 bg-[#333333] flex flex-col items-center py-3 border-r border-[#3c3c3c] flex-shrink-0">
                    {sidebarIcons.map((item, index) => (
                        <div
                            key={index}
                            className={`w-10 h-10 flex items-center justify-center mb-2 cursor-pointer hover:bg-[#2a2a2a] rounded transition-colors duration-150 ${item.active ? 'bg-[#2a2a2a] border-l-2 border-[#007acc] ml-0 rounded-l-none' : ''
                                }`}
                            onClick={item.onClick}
                        >
                            {item.icon}
                        </div>
                    ))}
                </div>

                {/* Sidebar */}
                {isSidebarOpen && (
                    <div className="w-64 sm:w-64 bg-[#252526] border-r border-[#3c3c3c] flex flex-col flex-shrink-0 hidden sm:flex">
                        <div className="p-4 flex-shrink-0">
                            <h2 className="text-xs uppercase font-semibold text-[#969696] mb-3 tracking-wide">Explorer</h2>

                            {/* Portfolio Folder */}
                            <div
                                className="flex items-center text-sm py-1 cursor-pointer hover:bg-[#094771] rounded px-2 -mx-2 transition-colors duration-150"
                                onClick={() => setIsPortfolioExpanded(!isPortfolioExpanded)}
                            >
                                {isPortfolioExpanded ? (
                                    <VscChevronDown className="w-3 h-3 mr-1" />
                                ) : (
                                    <VscChevronRight className="w-3 h-3 mr-1" />
                                )}
                                {isPortfolioExpanded ? (
                                    <VscFolderOpened className="w-4 h-4 mr-2" />
                                ) : (
                                    <VscFolder className="w-4 h-4 mr-2" />
                                )}
                                <span className="font-medium">hmes98318</span>
                            </div>

                            {/* Files List */}
                            {isPortfolioExpanded && (
                                <div className="ml-4 mt-2">
                                    {files.map((file) => (
                                        <div
                                            key={file.name}
                                            className={`flex items-center px-3 py-1 mb-1 cursor-pointer hover:bg-[#094771] rounded text-sm transition-colors duration-150 ${activeFile === file.name ? 'bg-[#094771] text-white' : 'text-[#cccccc]'
                                                }`}
                                            onClick={() => handleFileClick(file.name)}
                                        >
                                            <div className="w-4 h-4 mr-2 flex-shrink-0">
                                                {file.icon}
                                            </div>
                                            <span className="truncate">{file.name}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex-1 flex flex-col min-w-0">
                    {/* Tabs */}
                    <div className="bg-[#2d2d30] border-b border-[#3c3c3c] flex flex-shrink-0 overflow-x-auto">
                        {/* Mobile file selector */}
                        <div className="sm:hidden flex items-center px-4 py-3 border-r border-[#3c3c3c] min-w-0">
                            <select
                                value={activeFile}
                                onChange={(e) => handleFileClick(e.target.value)}
                                className="bg-[#2d2d30] text-[#cccccc] text-sm border-none outline-none min-w-0 truncate"
                            >
                                {files.map((file) => (
                                    <option key={file.name} value={file.name}>
                                        {file.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Desktop tabs */}
                        <div className="hidden sm:flex overflow-x-auto">
                            {openTabs.map((tab) => (
                                <div
                                    key={tab}
                                    className={`flex items-center px-4 py-2 border-r border-[#3c3c3c] cursor-pointer group flex-shrink-0 min-w-0 hover:bg-[#383838] transition-colors duration-150 ${activeFile === tab ? 'bg-[#1e1e1e] text-white' : 'bg-[#2d2d30] text-[#cccccc] hover:text-white'
                                        }`}
                                    onClick={() => setActiveFile(tab)}
                                >
                                    <div className="w-4 h-4 mr-2 flex-shrink-0">
                                        {files.find(f => f.name === tab)?.icon}
                                    </div>
                                    <span className="text-sm whitespace-nowrap truncate max-w-[120px]">{tab}</span>
                                    <button
                                        className="ml-3 w-6 h-6 rounded hover:bg-[#3c3c3c] flex items-center justify-center opacity-0 group-hover:opacity-100 flex-shrink-0 transition-all duration-150 hover:text-[#ff6b6b] cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleTabClose(tab);
                                        }}
                                        title="Close tab"
                                    >
                                        <VscClose className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 overflow-hidden min-h-0">
                        {activeFile === 'README.md' && <ReadmePage />}
                        {activeFile === 'projects.tsx' && <ProjectsPage />}
                        {activeFile === 'contact.md' && <ContactPage />}
                        {!activeFile && (
                            <div className="h-full flex items-center justify-center">
                                <div className="text-center text-[#969696]">
                                    <VscFiles className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                    <h2 className="text-xl font-semibold mb-2">No file selected</h2>
                                    <p>Select a file from the sidebar to get started</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Status Bar - Full Width */}
            <div className="h-5.5 bg-[#007acc] flex items-center justify-between px-3 text-white text-xs flex-shrink-0">
                <div className="flex items-center space-x-2">
                    <VscVscode className="w-4 h-4" />
                    <div className="flex items-center space-x-3">
                        <IoGitBranchOutline className="w-4 h-4" />
                        <span>main</span>
                        <VscSync className="w-4 h-4" />
                    </div>
                    <VscError className="w-4 h-4" />
                    <span>128</span>
                    <VscWarning className="w-4 h-4" />
                    <span>{profileViews}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span>Ln 1, Col 1</span>
                    <span>Spaces: 4</span>
                    <span>UTF-8</span>
                    <span>LF</span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default VSCodeLayout;
