import { h } from 'preact';

const CollaboratorComp = ({ 
    name, 
    picture = '../assets/images/avatar.png', 
    link = "javascript:void(1)", 
    contributions = 1, 
    contributionsStatus = false 
}) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex relative px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-900 dark:text-gray-400 text-gray-800"
        >
            <img
                class="h-6 w-6 rounded-full border border-gray-100 shadow-sm absolute left-0.5 top-0.5"
                src={picture}
                alt={name}
            />
            <span class="pl-5">{name}</span>
            {!contributionsStatus && (
                <span class="pl-2 pr-2 mx-3 mr-0 rounded-full bg-white text-black dark:bg-gray-700 dark:text-gray-300">
                    {contributions}
                </span>
            )}
        </a>
    );
}

export default CollaboratorComp;
