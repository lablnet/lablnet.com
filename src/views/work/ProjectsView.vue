<template>
<div>
    <PostLayout :title="title" :description="description">

        <!-- Pakistan Weather Scrapper Start -->
        <PostInfo :stack="['Python', 'React', 'TailwindCSS']" title="Pakistan Weather Scrapper" subtitle="July 2022" siteURL="https://weather.lablnet.com/" codeURL="lablnet/pakweather_scrapper" />

        <h3 class="project-headings mt-9 dark:text-gray-300">⚠️ Note</h3>
        <ol class="list-disc mx-6 mt-3 dark:text-gray-300">
            <li>
                Multithreading does not affect the network throughput, it only splits the urls into multiple threads which wait in the network queue. But the data updating in the file is concurrent.
            </li>
            <ol class="list-disc mx-6 mt-3">
                <li>
                    For example, if the 1st thread is updating data in the file at the same time the 2nd thread is fetching data from the network, the 2nd thread does not have to wait for the 1st thread to finish.
                </li>
            </ol>
        </ol>
        <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>
        <p class="text-justify dark:text-gray-300">
            <ol class="list-disc mx-6 mt-3">
                <li>
                    The sole purpose of this project is to get the weather data of Pakistan from Weather Channel and store it in a database/csv. The data is then can be used for further analysis.
                </li>
                <li>
                    After completion of this project, I thought why not to create simple web app to show the weather data of Pakistan. So I created a simple web app to show the weather data of Pakistan, so the fun purpose is to check latest weather report.
                </li>
            </ol>
        </p>
        <h3 class="project-headings mt-9 dark:text-gray-300">Woking</h3>
        <p class="text-justify dark:text-gray-300">
            The script run every hour and fetch the weather data from the weather channel and store it in a database using GitHub Actions. <strong> I should thank <a href="https://github.com" target="_blank">GitHub</a> for providing free CI/CD services. </strong>
        </p>
       <h3 class="project-headings mt-9 dark:text-gray-300">Data Files</h3>
        <p class="text-justify dark:text-gray-300">
            I did not store the data into single file, instead the data is stored in multiple files, these files created with name of month under the year folder. For example, the data of Auguest 2022 is stored in the file named <code>/data/2022/aug.csv</code>. The data is stored in the CSV format.
            <br />
            <strong>The reason behind this as follow:</strong>
            <ol class="list-disc mx-6 mt-3">
                <li>
                    If the data is stored in a single file, the file size will be huge and it will be difficult to read the data. So I decided to store the data in multiple files. 
                </li>
                <li>
                    I am using GitHub as a database, and GitHub has a limit of 100MB per file. So I decided to store the data in multiple files.
                </li>
            </ol>
            <br />
            But there is a problem, if the data is stored in multiple files, it will be difficult to read the data from multiple files. So I will created a simple script to read the data from multiple files and store it in a single file.
        </p>
         <h3 class="project-headings mt-9 dark:text-gray-300">Future Thoughts</h3>
        <p class="text-justify dark:text-gray-300">
            I monitor If the GitHub action is failing, if it is failing, I will check the logs and fix the issue. and at end I will create the script to merge the data from multiple files into a single file.
        </p>
        <hr class="mt-12 mb-4" />
        <!-- Pakistan Weather Scrapper End -->

        <PostInfo :stack="['Javascript', 'Python']" title="Fontpicker" subtitle="July 2022" siteURL="https://lablnet.github.io/fontpicker/" codeURL="lablnet/fontpicker" />

        <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

        <p class="text-justify dark:text-gray-300">
            A standalone font picker for the web. A package to quickly choose fonts from Google Web Fonts and preview a font from Google's large range of free fonts, and optionally select a font weight and font style (normal or italics).

            <br />
            The sole purpose of this project is to provide a simple and easy to use font picker for the CRM, ERP and other system.
            <ol class="list-disc mx-6 mt-3">
                <li>Admin to update site fonts.</li>
                <li>Enable users to customize their profile as they want.</li>
                <li>And more</li>
            </ol>

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
                <li>Find fonts by name, language and category (serif, sans-serif, display, handwriting, monospace).</li>
                <li>Update style to make it mobile responsive .</li>
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
            I would like to continue to work on adding more features to this
            project, which are stated in <a href="#fontpickertodo">Todo</a> and more.
        </p>

        <hr class="mt-12 mb-4" />

        <PostInfo :stack="['Javascript']" title="Board" subtitle="Auguest 2020" siteURL="https://board.lablnet.com/" codeURL="lablnet/board" />

        <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

        <p class="text-justify dark:text-gray-300">
            The main objective of this project is to create simple, standalone,
            flexible and very lightweight board app / PWA in vanilla JavaScript.
        </p>
        <h3 class="project-headings mt-5 dark:text-gray-300">Features</h3>
        <p class="text-justify dark:text-gray-300">
            <ol class="list-disc mx-6">
                <li>Platform friendly (Mobile and Desktop)</li>
                <li>Different styling options.</li>
                <li>Exports options.</li>
                <li>And more.</li>
            </ol>
        </p>
        <h3 class="project-headings mt-5 dark:text-gray-300">Related Projects</h3>
        <p class="text-justify dark:text-gray-300">
            <ol class="list-disc mx-6">
                <li><a class="text-blue-400 underline" target="_blank" rel="noopener noreferrer" href="https://github.com/cs50/draw.cs50.io">https://github.com/cs50/draw.cs50.io</a> (but they are using paperjs and hammerjs lib).</li>
            </ol>
        </p>

        <h3 class="project-headings mt-5 dark:text-gray-300">Future Thoughts</h3>
        <p class="text-justify dark:text-gray-300">
            I would like to continue to work on adding more features to this
            project, such as a socket for handling live sharing with more than one
            person, etc.
        </p>

        <hr class="mt-12 mb-4" />
        <PostInfo :stack="['Javascript']" title="Snake" subtitle="November 2020" siteURL="https://snake.lablnet.com/index.html" codeURL="lablnet/snake" />
        <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

        <p class="text-justify dark:text-gray-300">
            It is my own implementation of Snake Game in HTML 5 canvas and vanilla js.
        </p>
        <h3 class="project-headings mt-5 dark:text-gray-300">KNown Issues</h3>
        <p class="text-justify">
            <ol class="list-disc mx-6 dark:text-gray-300">
                <li>When game over, it does not play again on click user have to refresh page.</li>
                <li>Not working properly in mobile.</li>
            </ol>
        </p>
        <hr class="mt-12 mb-4" />
        <PostInfo :stack="['Javascript']" title="Tic Tac Toe" subtitle="May 2021" siteURL="https://tictactoe.lablnet.com/" codeURL="lablnet/TicTacToe" />
        <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

        <p class="text-justify dark:text-gray-300">
            It is my own implementation of Tic Tac Toe game using Minimax algorithm.
        </p>
        <h3 class="project-headings mt-5 dark:text-gray-300">Known Issues</h3>
        <p class="text-justify dark:text-gray-300">
            <ol class="list-disc mx-6">
                <li>When game over, it does not play again on click user have to refresh page.</li>
                <li>Not working properly in mobile.</li>
            </ol>
        </p>

        <hr class="mt-12 mb-4" />
        <PostInfo :stack="['JavaScript', 'Cordova']" title="EasyTool App" subtitle="Jamuary 2020" siteURL="https://play.google.com/store/apps/details?id=com.lablnet.easytools" codeURL="lablnet/EasyTools-Source" />
        <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

        <p class="text-justify dark:text-gray-300">
            This was my first Android application, I created it just for practice.
        </p>
        <h3 class="project-headings mt-5 dark:text-gray-300">Features</h3>
        <p class="text-justify dark:text-gray-300">
            <ol class="list-disc mx-6">
                <li>Notes and Todos.</li>
                <li>Calculator and Converter.</li>
                <li>Color picker, Stopwatch, Timer and Counter.</li>
            </ol>
        </p>
        <hr class="mt-12 mb-4" />
        <PostInfo :stack="['Dart', 'Flutter']" title="Prayers Time" subtitle="April 2021" siteURL="https://play.google.com/store/apps/details?id=prayer_time.lablnet.app" codeURL="alphasofthub/prayer_time" />
        <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

        <p class="text-justify dark:text-gray-300">
            A Dart Package to find prayers/ramazan timings for your exact location. This is the rewrite version of PHP code provided by <a class="text-blue-400 underline" href="http://praytimes.org/" target="_blank" rel="noopener noreferrer">praytimes.org</a>
        </p>
        <hr class="mt-12 mb-4 dark:text-gray-300" />
        <PostInfo :stack="['Vue', 'Javascript']" title="Upwork Visualization" subtitle="March 2021" siteURL="https://lablnet.github.io/upwork_visualization/" codeURL="lablnet/upwork_visualization" />
        <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

        <p class="text-justify dark:text-gray-300">
            Actually, being a freelancer in Upwork, I made this tool for myself but I publish it for others to take advantage of.
            <i>Upwork does not show charts of your earnings and stat of total earnings, this project purpose is to visualize graphically so you know how you’re making progress, how much you have earned, how much you spend and how much Upwork has charged you. -14 April, 2021</i>
        </p>
        <h3 class="project-headings mt-5 dark:text-gray-300">Features</h3>
        <p class="text-justify dark:text-gray-300">
            <ol class="list-disc mx-6">
                <li>Show chart of earnings.</li>
                <li>No server is involved.</li>
            </ol>
        </p>
        <hr class="mt-12 mb-4" />

        <PostInfo :stack="['Javascript']" title="Resume" subtitle="May 2021" siteURL="https://lablnet.github.io/resume" codeURL="alphasofthub/resume" />
        <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

        <p class="text-justify dark:text-gray-300">
            The main objective of this project is to easily create a resume on the GitHub page.
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
