<template>
<div>
    <PostLayout 
    :title="title" 
    :description="description" 
    :coverPic="this.theme === 'dark' ? require('../../assets/images/transparent/riphah.png') : require('../../assets/images/riphah.png')">

        <p class="text-justify dark:text-gray-300">
            It was the start of the summer semester, and as I looked over the course list, I spotted the dreaded <strong>Web Engineering</strong> course. It was a mandatory course, so there was no getting out of it. Reluctantly, I enrolled, knowing full well that it would be a tedious experience. <br /> <br />

            But as the semester started, I quickly realized that my fears were justified. The course was a drag, and I needed to stay focused and motivated. Desperate for a solution, I turned to my friend <a class="text-blue-500 hover:underline" href="https://www.linkedin.com/in/muhammadusmannaeem/" target="_blank">Usman</a> for advice. <br /> <br />

            "You should talk to the professor," he suggested. "Maybe they can help." <br /> <br />

            I was skeptical. "They'll probably just tell me to suck it up and deal with it," I replied. <br /> <br />

            But <a class="text-blue-500 hover:underline" href="https://www.linkedin.com/in/muhammadusmannaeem/" target="_blank"> Usman</a>
             was more intelligent than that. "Why don't you send them your portfolio?" he suggested. "Maybe they'll see that you're capable of more than the course is offering, and they'll come up with something else for you." <br /> <br />

            I was hesitant, but I knew he was right. So I took his advice and sent my portfolio to the professor, <a class="text-blue-500 hover:underline" href="https://www.linkedin.com/in/saudkhanpk/" target="_blank">Saud Khan</a>. <br /> <br />

            To my surprise, he responded quickly, praising my work and acknowledging that the course was probably not a good fit for me. "I have another plan for you," he said. <br /> <br />

            We scheduled a meeting, and during our conversation, he proposed that I work on a project for the university: an alumni management system. Currently, there needed to be an efficient way to keep track of alumni, and he thought I could use my skills to develop a solution. <br /> <br />

            I was excited by the prospect of working on a real-world project, and I agreed to take on the challenge. The boring <strong>Web Engineering</strong> course was a thing of the past, and I was looking forward to a new and exciting opportunity. My grade would be computed based on the output of the project. The scope of project and requirements were discussed and mutually agreed upon over a timeframe of four months. <br /> <br />


            After receiving an A+ in my Web Engineering course, I was approached by my professor, <a class="text-blue-500 hover:underline" href="https://www.linkedin.com/in/saudkhanpk/" target="_blank">Saud Khan</a>, with the opportunity to continue working on the project as an intern. Riphah University would provide me with an internship certificate, three credit hours, and a letter of recommendation from the Director of Computing. After discussing the opportunity with my brother Hamza, I decided to take on the internship, which allowed me to drop a course called Mobile Application Development. <br /> <br />

            As the lead developer, I was responsible for forming a team of 2-3 members to work under my supervision. I interviewed and selected my friend <a class="text-blue-500 hover:underline" href="https://www.linkedin.com/in/zain-ul-abdin-0769a6207/" target="_blank">Zain</a>, and after some convincing, also added <a class="text-blue-500 hover:underline" href="https://www.linkedin.com/in/muhammadusmannaeem/" target="_blank">Usman</a> to the team. We have been working on the project for the past three months, and it has been a valuable experience in team management and leadership. 
        </p>
        <hr class="mt-9 mb-4 mx-auto !w-50" style="width: 50%" />
        <PostInfo 
            :stack="['PHP', 'Laravel', 'Vue', 'Typescript', 'Javascript', 'TailwindCSS', 'MySQL']" 
            title="Alumni Management System"
            subtitle="May 2022"
            :collabrators="collabrators"
        />

        <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

        <p class="text-justify dark:text-gray-300">
            This project aims to provide a platform for Riphah Alumni to connect with each other, showcase their accomplishments and job opportunities, and facilitate.
        </p>
        <h3 class="project-headings mt-5 dark:text-gray-300">Challenges</h3>
        <p class="text-justify dark:text-gray-300">
            As a developer working on this project, I faced several challenges. The first challenge was implementing a permission-based admin panel, which required me to utilize web services on both the front and server sides. Despite the complexity of this task, I could confidently tackle it and complete it. <br /> <br />
            The second challenge was related to deployment, as we had to adhere to Riphah's policies. This proved to be a headache, but I was able to find a solution by deploying the project to my server for demonstration and progress-tracking purposes.<br /> <br />
            Overall, despite the challenges I faced, I overcame them and made significant progress on this project.
        </p>
        <h3 class="project-headings mt-5 dark:text-gray-300">Some Goodies</h3>
        <p class="text-justify dark:text-gray-300">
            Working on this project was incredibly exciting for me, as it had the potential to be used by large organizations to manage their alumni. The project's scope was large and complex, providing a hands-on experience for the team. I was thrilled to be able to contribute to such a valuable tool and to gain experience working on a complex project.
        </p>
        <h3 class="project-headings mt-5 dark:text-gray-300">Lessons Learnt</h3>
        <p class="text-justify dark:text-gray-300">
            While working on this project, I learned several lessons that will be valuable to me in the future.<br /> <br />

            Firstly, I learned the importance of planning and organization. As the project became more complex, it became clear that a well-defined plan was necessary to keep everything on track. Following a clear plan, I could break down the project into manageable tasks and make steady progress. <br /> <br />

            Secondly, I learned the value of collaboration. This project was a team effort, and working closely with my fellow developers was crucial to our success. By sharing ideas and working together, we overcame challenges and delivered a high-quality product. <br /> <br />

            Lastly, I learned the importance of problem-solving skills. Throughout the project, I encountered various challenges that required me to think creatively and find solutions. These experiences helped me to develop my problem-solving skills and gave me confidence in my ability to tackle complex tasks.
        </p>
        <h3 class="project-headings mt-5 dark:text-gray-300">Future Thoughts</h3>
        <p class="text-justify dark:text-gray-300">
            This project has the potential to continue growing and evolving even after I have moved on to other endeavors. Our professor, <a href="https://www.linkedin.com/in/saudkhanpk/" target="_blank">Saud Khan</a>, will determine the project's future direction. I am confident that this project will continue to thrive under his guidance and provide valuable support to the Riphah Alumni community.
        </p>
    </PostLayout>
</div>
</template>

<script lang="js">
import PostLayout from "@/components/PostLayout";
import PostInfo from "@/components/PostInfo";
import {
    useThemeStore
} from '@/store/ThemeStore';

export default {
    name: "RiphahView",
    components: {
        PostLayout,
        PostInfo,
    },
    data() {
        return {
            collabrators: [
                {
                    name: "Muhammad Umer Farooq",
                    pic: require("@/assets/images/u.png"),
                    link: "https://lablnet.com",
                    contributions: 185,
                },
                {
                    name: "Muhammad Usman Naeem",
                    pic: require("@/assets/images/usman.jpg"),
                    link: "https://www.linkedin.com/in/muhammadusmannaeem/",
                    contributions: 80,
                },
                {
                    name: "Zain Ul Zain",
                    pic: require("@/assets/images/zain.jpg"),
                    link: "https://www.linkedin.com/in/zain-ul-abdin-0769a6207/",
                    contributions: 29,
                },
            ],
            title: "Riphah International University",
            description: "Riphah International University offered me the opportunity to work on building an alumni management system for Riphah International University. The university will use this system to manage and connect with its alumni. I was excited to take on the project and help the university strengthen its relationship with its graduates.",
        }
    },
    computed: {
        theme() {
            return useThemeStore().theme;
        },
    }
}
</script>
