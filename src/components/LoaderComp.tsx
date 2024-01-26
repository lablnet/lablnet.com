import { h } from 'preact';
// import './LoaderComp.css'; // Assuming CSS is extracted to a separate file

const LoaderComp = ({ loading }) => {
    if (!loading) {
        return null;
    }

    return (
        <div class="flex justify-center items-center">
            <div class="loader bg-transparent p-5 rounded-full flex space-x-3">
                <div class="w-5 h-5 bg-black dark:bg-gray-300 rounded-full animate-bounce"></div>
                <div class="w-5 h-5 bg-black dark:bg-gray-300 rounded-full animate-bounce"></div>
                <div class="w-5 h-5 bg-black dark:bg-gray-300 rounded-full animate-bounce"></div>
            </div>
        </div>
    );
}

export default LoaderComp;
