import { AiOutlineMail, AiOutlineGlobal, AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineCheck } from 'react-icons/hi';
import { useState } from 'react';
import { MdOutlineContentCopy } from 'react-icons/md';


const ContactPage = () => {
    const [copiedItem, setCopiedItem] = useState<string | null>(null);

    const contactMethods = [
        {
            icon: <AiOutlineMail className="w-6 h-6" />,
            title: 'Email',
            value: 'hmes98318@gmail.com',
            link: 'mailto:hmes98318@gmail.com'
        },
        {
            icon: <AiOutlineGithub className="w-6 h-6" />,
            title: 'GitHub',
            value: 'github.com/hmes98318',
            link: 'https://github.com/hmes98318'
        },
        {
            icon: <AiOutlineGlobal className="w-6 h-6" />,
            title: 'Website',
            value: 'ggwp.tw',
            link: 'https://ggwp.tw'
        }
    ];

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedItem(text);
            // 3秒後自動隱藏提示
            setTimeout(() => {
                setCopiedItem(null);
            }, 3000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="h-full w-full overflow-auto bg-[#1e1e1e] text-[#cccccc] relative">
            <div className="max-w-4xl mx-auto p-4 md:p-6 min-h-full">
                {/* Header */}
                <div className="mb-6 md:mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Get In Touch</h1>
                    <p className="text-[#969696] text-sm md:text-lg">
                        Feel free to reach out for collaborations, opportunities, or just to say hello!
                    </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                    {contactMethods.map((method, index) => (
                        <div
                            key={index}
                            className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-4 md:p-6 hover:border-[#007acc] transition-all duration-300 group"
                        >
                            <div className="flex items-start space-x-3 md:space-x-4">
                                <div className="flex-shrink-0 p-2 md:p-3 bg-[#333333] rounded-lg group-hover:bg-[#007acc] transition-colors duration-300">
                                    <div className="text-[#cccccc] group-hover:text-white">
                                        {method.icon}
                                    </div>
                                </div>

                                <div className="flex-grow min-w-0">
                                    <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                                        {method.title}
                                    </h3>

                                    <div className="flex items-center space-x-2 md:space-x-3">
                                        <a
                                            href={method.link}
                                            target={method.link.startsWith('http') ? '_blank' : '_self'}
                                            rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                            className="text-[#007acc] hover:text-[#1e90ff] font-mono text-base md:text-lg hover:underline transition-colors duration-300 truncate"
                                        >
                                            {method.value}
                                        </a>

                                        <button
                                            onClick={() => handleCopy(method.value)}
                                            className="p-2 text-[#969696] hover:text-[#cccccc] transition-colors duration-300 flex-shrink-0 hover:bg-[#3c3c3c] rounded focus:outline-none"
                                            title="Copy to clipboard"
                                        >
                                            {copiedItem === method.value ? (
                                                <HiOutlineCheck className="w-5 h-5 text-green-400" />
                                            ) : (
                                                <MdOutlineContentCopy className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
