<template>
    <div>
        <PostLayout :title="title" :description="description">

            <!-- Pakistan Weather Scrapper Start -->
            <PostInfo :stack="['Python', 'React', 'TailwindCSS']" title="Pakistan Weather Scrapper" subtitle="July 2022" siteURL="https://weather.lablnet.com/" codeURL="lablnet/pakweather_scrapper" />

            <h3 class="project-headings mt-9 dark:text-gray-300">⚠️ Note</h3>
            <ol class="list-disc mx-6 mt-3 dark:text-gray-300">
                <li>
                    Multithreading does not affect network throughput, as it only splits URLs into multiple threads that wait in the network queue. However, data updating in the file is concurrent, meaning that
                </li>
                <ol class="list-disc mx-6 mt-3">
                    <li>
                        for example, if the first thread is updating data in the file at the same time the second thread is fetching data from the network, the second thread does not have to wait for the first thread to finish.
                    </li>
                </ol>
            </ol>
            <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>
            <p class="text-justify dark:text-gray-300">
                The sole purpose of this project is to retrieve weather data for Pakistan from the Weather Channel and store it in a database or CSV file. This data can then be used for further analysis. Additionally, I created a simple web app to display the latest weather reports for Pakistan as a fun extension of the project.
            </p>
            <h3 class="project-headings mt-9 dark:text-gray-300">Woking</h3>
            <p class="text-justify dark:text-gray-300">
                The script runs every hour, using <a class="text-blue-500 hover:underline" href="https://github.com" target="_blank">GitHub Actions</a> to fetch the weather data from the Weather Channel and store it in the database.
            </p>
            <h3 class="project-headings mt-9 dark:text-gray-300">Data Files</h3>
            <p class="text-justify dark:text-gray-300">
                To avoid creating a large, unwieldy file, the data is stored in multiple files organized by year and month. For example, data for August 2022 would be stored in the file "/data/2022/aug.csv" in CSV format. This approach was chosen because storing the data in a single file would make it difficult to read, and GitHub's file size limit of 100MB necessitated the use of multiple files. <br /> <br />
                However, this approach creates a new problem: it is difficult to read data from multiple files. To address this issue, I plan to create a simple script that will read data from multiple files and store it in a single file.
            </p>
            <h3 class="project-headings mt-9 dark:text-gray-300">Future Thoughts</h3>
            <p class="text-justify dark:text-gray-300">
                In the future, I plan to monitor the status of the GitHub action and fix any issues that may arise. I will also create a script to merge the data from multiple files into a single file for easier access and analysis.
            </p>
            <hr class="mt-12 mb-4" />
            <!-- Pakistan Weather Scrapper End -->

            <!-- Fontpicker Project Start -->
            <PostInfo :stack="['Javascript', 'Python']" title="Fontpicker" subtitle="July 2022" siteURL="https://lablnet.github.io/fontpicker/" codeURL="lablnet/fontpicker" />

            <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

            <p class="text-justify dark:text-gray-300">
                The purpose of this project is to create a standalone font picker for the web. The font picker will allow users to quickly preview and select fonts from Google's large range of free fonts. Users will be able to select a font family, as well as optional font weight and style (normal or italics).
            </p>
            <h3 class="project-headings mt-5 dark:text-gray-300">Features</h3>
            <p class="text-justify dark:text-gray-300">
                <ol class="list-disc mx-6">
                    <li>Quickly preview and select any Google font family.</li>
                    <li>Optionally choose font weight and font style.</li>
                </ol>
            </p>
            <h3 class="project-headings mt-5 dark:text-gray-300" id="fontpickertodo">Todo</h3>
            <p class="text-justify dark:text-gray-300">
                <ol class="list-disc mx-6">
                    <li>Find fonts by name, language, and category (serif, sans-serif, display, handwriting, monospace).</li>
                    <li>Update style to make it mobile responsive.</li>
                </ol>
            </p>
            <h3 class="project-headings mt-5 dark:text-gray-300">Related Projects</h3>
            <p class="text-justify dark:text-gray-300">
                <ol class="list-disc mx-6">
                    <li><a class="text-blue-400 underline" target="_blank" rel="noopener noreferrer" href="https://github.com/av01d/fontpicker-jquery-plugin">https://github.com/av01d/fontpicker-jquery-plugin</a> (but it's Jquery plugin and dependend on Jquery).</li>
                </ol>
            </p>

            <h3 class="project-headings mt-5 dark:text-gray-300">Future Thoughts</h3>
            <p class="text-justify dark:text-gray-300">
                Continue to work on adding more features to this project, such as those listed in the <a href="#fontpickertodo">Todo</a> section
            </p>
            <hr class="mt-12 mb-4" />

            <!-- Fontpicker Project End -->

            <!-- Board Project Start -->
            <PostInfo :stack="['Javascript']" title="Board" subtitle="Auguest 2020" siteURL="https://board.lablnet.com/" codeURL="lablnet/board" />

            <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

            <p class="text-justify dark:text-gray-300">
                The purpose of this project is to create a simple, standalone, and flexible board app or progressive web app (PWA) using vanilla JavaScript.
            </p>
            <h3 class="project-headings mt-5 dark:text-gray-300">Features</h3>
            <p class="text-justify dark:text-gray-300">
                <ol class="list-disc mx-6">
                    <li>Platform-friendly design for mobile and desktop devices.</li>
                    <li>Multiple styling options.</li>
                    <li>Export options.</li>
                    <li>And more.</li>
                </ol>
            </p>
            <h3 class="project-headings mt-5 dark:text-gray-300">Related Projects</h3>
            <p class="text-justify dark:text-gray-300">
                <ol class="list-disc mx-6">
                    <li><a class="text-blue-400 underline" target="_blank" rel="noopener noreferrer" href="https://github.com/cs50/draw.cs50.io">https://github.com/cs50/draw.cs50.io</a> (uses Paper.js and Hammer.js libraries).</li>
                </ol>
            </p>

            <h3 class="project-headings mt-5 dark:text-gray-300">Future Thoughts</h3>
            <p class="text-justify dark:text-gray-300">
                In the future, we plan to add more features to this project, such as live sharing via sockets for collaboration with multiple users.
            </p>
            <hr class="mt-12 mb-4" />

            <!-- Board Project End -->

            <!-- Snack Game Project Start -->
            <PostInfo :stack="['Javascript']" title="Snake" subtitle="November 2020" siteURL="https://snake.lablnet.com/index.html" codeURL="lablnet/snake" />
            <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

            <p class="text-justify dark:text-gray-300">
                This project is an implementation of the classic Snake game using HTML5 canvas and vanilla JavaScript.
            </p>
            <h3 class="project-headings mt-5 dark:text-gray-300">Known Issues</h3>
            <p class="text-justify">
                <ol class="list-disc mx-6 dark:text-gray-300">
                    <li>When the game is over, it does not restart on click, and the user must refresh the page to play again.</li>
                    <li>The game does not function properly on mobile devices.</li>
                </ol>
            </p>
            <hr class="mt-12 mb-4" />
            <PostInfo :stack="['Javascript']" title="Tic Tac Toe" subtitle="May 2021" siteURL="https://tictactoe.lablnet.com/" codeURL="lablnet/TicTacToe" />
            <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

            <p class="text-justify dark:text-gray-300">
                The purpose of this project is to implement a Tic Tac Toe game using the Minimax algorithm.
            </p>
            <h3 class="project-headings mt-5 dark:text-gray-300">Known Issues</h3>
            <p class="text-justify dark:text-gray-300">
                <ol class="list-disc mx-6">
                    <li>The game does not restart automatically after it ends; the user must refresh the page to play again.</li>
                    <li>The game may not function properly on mobile devices.</li>
                </ol>
            </p>

            <hr class="mt-12 mb-4" />
            <PostInfo :stack="['JavaScript', 'Cordova']" title="EasyTool App" subtitle="Jamuary 2020" siteURL="https://play.google.com/store/apps/details?id=com.lablnet.easytools" codeURL="lablnet/EasyTools-Source" />
            <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

            <p class="text-justify dark:text-gray-300">
                This was my first attempt at creating an Android application. It was developed for the purpose of practicing Android development.
            </p>
            <h3 class="project-headings mt-5 dark:text-gray-300">Features</h3>
            <p class="text-justify dark:text-gray-300">
                <ol class="list-disc mx-6">
                    <li>Notes and Todos: Users can create and manage notes and to-do lists.</li>
                    <li>Calculator and Converter: Users can perform basic arithmetic calculations and unit conversions.</li>
                    <li>Color Picker, Stopwatch, Timer, and Counter: Users can select colors, measure time intervals, set timers, and count events.</li>
                </ol>
            </p>
            <hr class="mt-12 mb-4" />
            <PostInfo :stack="['Dart', 'Flutter']" title="Prayers Time" subtitle="April 2021" siteURL="https://play.google.com/store/apps/details?id=prayer_time.lablnet.app" codeURL="alphasofthub/prayer_time" />
            <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

            <p class="text-justify dark:text-gray-300">
                This is a Dart package that can be used to find prayer and Ramadan timings for a specific location. It is a rewritten version of the PHP code provided by <a class="text-blue-400 underline" href="http://praytimes.org/" target="_blank" rel="noopener noreferrer">praytimes.org</a>
            </p>
            <hr class="mt-12 mb-4 dark:text-gray-300" />
            <PostInfo :stack="['Vue', 'Javascript']" title="Upwork Visualization" subtitle="March 2021" siteURL="https://lablnet.github.io/upwork_visualization/" codeURL="lablnet/upwork_visualization" />
            <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

            <p class="text-justify dark:text-gray-300">
                As a freelancer on Upwork, I developed this tool to help visualize and track my earnings and other statistics. I am publishing it for others to use as well.
                <i>Upwork does not provide charts or graphs showing earnings or statistics. -14 April, 2021</i>, so this project aims to provide that functionality.
            </p>
            <h3 class="project-headings mt-5 dark:text-gray-300">Features</h3>
            <p class="text-justify dark:text-gray-300">
                <ol class="list-disc mx-6">
                    <li>Shows charts of earnings and other statistics.</li>
                    <li>No server involvement is required.</li>
                </ol>
            </p>
            <hr class="mt-12 mb-4" />

            <PostInfo :stack="['Javascript']" title="Resume" subtitle="May 2021" siteURL="https://lablnet.github.io/resume" codeURL="alphasofthub/resume" />
            <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

            <p class="text-justify dark:text-gray-300">
                The goal of this project is to provide an easy way to create and publish a resume on a GitHub page.
            </p>
        </PostLayout>
    </div>
</template>

<script lang="js">
import PostLayout from "@/components/PostLayout";
import PostInfo from "@/components/PostInfo";

export default {
    name: "ProjectsView",
    components: {
        PostLayout,
        PostInfo,
    },
    data() {
        return {
            collabrators: [{
                name: "Muhammad Umer Farooq",
                pic: require("@/assets/images/u.png"),
                link: "https://lablnet.com",
            }, ],
            stack: ["PHP"],
            title: "Other Projects",
            description: "These are the project which I do not feel proud to show.",
        }
    }
}
</script>
