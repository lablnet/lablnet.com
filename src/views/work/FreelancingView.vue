<template>
  <div>
    <!-- Post Layout Start -->
    <PostLayout
      :title="title"
      :description="description"
      :coverPic="
        this.theme === 'dark'
          ? require('../../assets/images/transparent/freelancing.png')
          : require('../../assets/images/freelancing.png')
      "
    >
      <!-- Post Content Upwork Start -->
      <h2 class="!text-4xl">Upwork</h2>
      <p class="text-justify dark:text-gray-300">
        As a Top Rated freelancer on Upwork for the past two years, I have successfully
        completed over 65 projects and have received a 5-star rating on 90% of
        them. While I am unable to list all of my projects, I am proud to
        highlight a few of my most notable achievements.
      </p>

      <hr class="mt-9 mb-4 mx-auto !w-50" style="width: 50%" />

      <!-- Project 1 Start -->
      <PostInfo
        :stack="['PHP', 'HTML', 'CSS']"
        title="Set up shopping cart using Stripe.com Checkout (PhP)"
        subtitle="Jan 28, 2021 - Feb 24, 2021"
        siteURL="https://www.bungalowsoftware.com/subscription/buy/"
        :collabrators="collabrators"
      />
      <h3 class="project-headings mt-9 dark:text-gray-300">Overview</h3>
      <p class="text-justify dark:text-gray-300">
        One of my recent projects involved the development of a subscription software service for a client. The service offered customers the ability to choose from five products for their subscription, and utilized CheddarGetter for payment management, customer email communications, and other necessary tasks. However, the client was in the process of migrating to Stripe.com's subscription billing service and transitioning their code from Asp.net to PHP. I was tasked with implementing these changes, as well as creating a new database table to store the customer's subscription information and a simple admin panel to manage the subscriptions. I found this project to be engaging and was able to complete it within seven days, with the remaining time spent on testing by the client. This project allowed me to showcase my skills in web development and database management.
      </p>

      <hr class="mt-12 mb-4" />
      <!-- Project 1 End -->

      <!-- Project 2 Start -->
      <PostInfo
        :stack="['Laravel', 'Vue', 'TailwindCSS', 'MySQL', 'PHP']"
        title="Web based Student Information System"
        subtitle="Aug 27, 2022 - Sep 22, 2022"
        siteURL="https://sis.munacjny.org"
        :collabrators="collabrators"
      />
      <h3 class="project-headings mt-9 dark:text-gray-300">Overview</h3>
      <p class="text-justify dark:text-gray-300">
        The project involved creating a web-based Student Information System. The system was designed to manage student information, including registration details, course enrollment, and payment processing. The system had a user-friendly interface, and it provided a range of features to help users efficiently manage student data. These features included the ability to view and update student information, register students for courses, process payments, and generate reports. Overall, the system was a valuable tool for managing student information at educational institutions.
      </p>

      <hr class="mt-12 mb-4" />
      <!-- Project 2 End -->

      <!-- Project 3 Start -->
      <PostInfo
        :stack="['Python']"
        title="Alert System"
        subtitle="May 21, 2022"
        siteURL="https://www.upwork.com/jobs/~01144813b9f0ace2ef"
        :collabrators="collabrators"
      />
      <h3 class="project-headings mt-9 dark:text-gray-300">Overview</h3>
      <p class="text-justify dark:text-gray-300">
        The project involved creating an alert system that would send notifications via SMS and email when stock prices were updated. This required web scraping techniques to gather the necessary data from various online sources. I was able to successfully implement the alert system, and it was able to provide timely notifications to the specified recipients. This project allowed me to showcase my web scraping skills, and I was pleased with the successful completion of this task.
      </p>

      <hr class="mt-12 mb-4" />
      <!-- Project 3 End -->

      <!-- Project 4 Start -->
      <PostInfo
        :stack="['PHP', 'Laravel', 'React']"
        title="ProtonCash, Weareappointments"
        subtitle="Aug 7, 2021 - Sep 12, 2021"
        siteURL="https://weareappointments.com/"
        :collabrators="collabrators"
      />
      <h3 class="project-headings mt-9 dark:text-gray-300">Overview</h3>
      <p class="text-justify dark:text-gray-300">
        ProtonCash is an ERP CRM system that is used to manage legal cases and grant funds as loans. Weareappointments is another CRM system that is used to manage leads. These two systems are integrated to provide a comprehensive solution for managing legal cases and identifying potential clients. ProtonCash is specifically designed to handle the financial aspects of legal cases, including the granting of loans and the tracking of payments.
        <br />
        Weareappointments, on the other hand, is focused on managing the leads generated by the legal firm, including the tracking of client interactions and the scheduling of appointments. Together, these two systems provide a powerful tool for managing legal cases and client relationships.
      </p>

      <hr class="mt-12 mb-4" />
      <!-- Project 4 End -->

    <!-- Project 5 Start -->
      <PostInfo
        :stack="['Python', 'Flask', 'MySQL']"
        title="Python Consulting"
        subtitle="Feb 26, 2021 - Mar 1, 2021"
        :collabrators="collabrators"
      />
      <h3 class="project-headings mt-9 dark:text-gray-300">Overview</h3>
      <p class="text-justify dark:text-gray-300">
        Consulting with a client in Germany on the use of Python, Flask, and Firebase was an impressive and exciting experience. The project involved debugging issues and providing guidance on how to identify and solve future issues. I recommended using a hypothesis-driven approach, in which we develop a hypothesis about the cause of the problem and then use a divide-and-conquer strategy to systematically address each step. This approach proved to be effective, and the client was able to successfully resolve the issues with the project. Overall, it was a rewarding experience to be able to provide valuable guidance to the client and help them overcome challenges with their project.
      </p>

      <hr class="mt-12 mb-4" />
      <!-- Project 5 End -->

      <!-- Post Content Upwork End -->

      <!-- Post Content Direct Client Start -->
      <h2 class="!text-4xl">Direct Client</h2>
      <p class="text-justify dark:text-gray-300">
        As a developer with over five years of experience, I have had the
        opportunity to work with a variety of clients and companies. Over the
        course of my career, I have successfully completed more than seven
        projects, each one offering its own unique challenges and rewards. While
        I am unable to list all of the projects I have worked on, I am proud to
        highlight a few of my most notable achievements.
      </p>

      <hr class="mt-9 mb-4 mx-auto !w-50" style="width: 50%" />

      <!-- Project 1 Start -->
        <PostInfo 
          :stack="['Javascript', 'Jquery', 'Firebase']" title="LumberJack Game"
          subtitle="December 2019"
          siteURL="https://lablnet.github.io/LumberJack-game/v2/index.html" 
          :collabrators="collabrators"
        />
        <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

        <p class="text-justify dark:text-gray-300">
            One of my freelance projects was the development of a game that focused on the importance of trees for the health of our planet. In the game, players are invited to "plant trees" in a race against a malevolent lumberjack who seeks to chop them down. As the game progresses, it becomes increasingly faster and harder to click on the sack to "plant trees". Once time runs out, players are presented with a fact about the importance of trees for the environment. This game was developed after a man from Japan contacted me directly and hired me for the job. I was responsible for bringing the game concept to life, and was pleased with the final result. This project allowed me to showcase my skills in game development and contribute to a important environmental message.
        </p>
        <h3 class="project-headings mt-5 dark:text-gray-300">Credits</h3>
        <p class="text-justify">
            <ol class="list-disc mx-6 break-all">
                <li>Character: <a class="text-blue-400 underline" target="_blank"  rel="noopener noreferrer" href="https://giphy.com/stickers/stem-2w9gmg97uKtbi">https://giphy.com/stickers/stem-2w9gmg97uKtbi</a></li>
                <li>Tree: <a class="text-blue-400 underline" target="_blank" rel="noopener noreferrer" href="https://www.cleanpng.com/png-computer-icons-acacia-gum-arabic-tree-clip-art-2752802/download-png.html">https://www.cleanpng.com/png-computer-icons-acacia-gum-arabic-tree-clip-art-2752802/download-png.html</a></li>
                <li>Sack of Seeds: <a class="text-blue-400 underline" target="_blank" rel="noopener noreferrer" href="https://www.clipartwiki.com/iclip/ihbiTih_vector-illustration-of-sack-of-milled-wheat-grain/">https://www.clipartwiki.com/iclip/ihbiTih_vector-illustration-of-sack-of-milled-wheat-grain/</a></li>
                <li>Background: <a class="text-blue-400 underline" target="_blank" rel="noopener noreferrer" href="https://superawesomevectors.com/vector-desert-landscape-background/">https://superawesomevectors.com/vector-desert-landscape-background/</a></li>
            </ol>
        </p>
        <hr class="mt-12 mb-4" />
        <!-- Project 1 End -->

        <!-- Project 2 Start -->
        <PostInfo 
          :stack="['WordPress']"
          title="SpendBTC"
          subtitle="July 2019"
          siteURL="https://spendbtc.io"
          :collabrators="collabrators"
         />
        <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

        <p class="text-justify dark:text-gray-300">
            This project involved the development of an Amazon gift buying site that allowed users to make purchases using various cryptocurrencies. This was a new challenge for me, as it was the first time I had developed a custom theme and plugins for WordPress. The project was initiated when a man from Japan contacted me directly and hired me for the job. Despite the challenges, I was able to successfully complete the project, resulting in a fully functional and user-friendly website. This experience allowed me to expand my skillset and broaden my expertise in WordPress development.
        </p>
        <hr class="mt-12 mb-4" />

        <!-- Project 2 End -->

        <!-- Project 3 Start -->

        <PostInfo 
          :stack="['JavaScript', 'Cordova']"
          title="AINDA"
          subtitle="February 2020"
          siteURL="https://play.google.com/store/apps/details?id=com.practicalvalue.ainda&hl=en"
          :collabrators="collabrators"
        />
        <p class="mt-9 text-justify dark:text-gray-300">
            One of my project was the development of an Android application for Icontem, a Brazil-based company owned by Manuel Lemos. The goal of the app was to help users find the best business partners by allowing them to log in and search for potential partners based on various criteria. I was responsible for the entire development process, from conceptualization to deployment, and was able to deliver a high-quality product that met the client's needs and expectations. This project allowed me to gain valuable experience in developing mobile applications, and I was pleased to be able to contribute to the success of Icontem.
        </p>
        <hr class="mt-12 mb-4" />

        <!-- Project 3 End -->

      <!-- Post Content Direct Client End -->

      <!-- Post Content Fiverr Start -->
      <h2 class="!text-4xl">Fiverr</h2>
      <p class="text-justify dark:text-gray-300">
        As a freelancer on Fiverr for the past two years, I have successfully completed over 7 projects and have received a 5-star rating on 100% of them. While I am unable to list all of my projects, I am proud to highlight a few of my most notable achievements.
      </p>

      <hr class="mt-9 mb-4 mx-auto !w-50" style="width: 50%" />
        <PostInfo 
          :stack="['PHP', 'WordPress']"
          title="Bkash payment WooCommerce plugin"
          subtitle="Dec 19, 2019"
          :collabrators="collabrators"
        />
        <p class="mt-9 text-justify dark:text-gray-300">
            One of my project was the development of Bkash payment WooCommerce plugin. This plugin allows e-commerce businesses to easily accept payments via the popular Bkash payment gateway, providing their customers with a convenient and secure way to make purchases on their website. <br /> <br />
            I am proud of the work I have done on this project, and I am excited to see how it will help e-commerce businesses in Bangladesh grow and thrive.
        </p>
      <!-- Post Content Fiverr End -->
      <hr class="mt-12 mb-4" />

      <!-- Post Content Freelancer.com Start -->
      <h2 class="!text-4xl">Freelancer.com</h2>
      <p class="text-justify dark:text-gray-300">
        While I have only completed one project on freelancer.com, I quickly realized that this platform is rife with scams and spam. This was a disappointing discovery, as it made it difficult for me to trust the legitimacy of the opportunities available on the site. Despite this, I was able to successfully complete the project I was working on, and I gained valuable experience in the process. However, I decided to explore other freelance platforms in order to avoid the scams and spam that are prevalent on freelancer.com.
      </p>

      <hr class="mt-9 mb-4 mx-auto !w-50" style="width: 50%" />
        <PostInfo 
          :stack="['PHP', 'MySQL']"
          title="Php out mysql data"
          subtitle="Dec, 2020"
          siteURL="https://www.freelancer.com/projects/php/Php-out-mysql-data"
          :collabrators="collabrators"
        />
        <p class="mt-9 text-justify dark:text-gray-300">
            The project involved extracting data from a MySQL database using PHP. While the overall project was relatively simple, the MySQL queries required to complete it were quite complex. However, I was able to successfully configure and execute the queries, and I was able to extract the necessary data from the database. This allowed me to complete the project successfully, and I gained valuable experience working with complex MySQL queries in the process. Overall, I was pleased with the successful completion of this project.
        </p>
      <!-- Post Content Freelancer.com End -->
    </PostLayout>
    <!-- Post Layout End -->
  </div>
</template>

<script lang="js">

import PostLayout from "@/components/PostLayout";
import PostInfo from "@/components/PostInfo";
import { useThemeStore } from '@/store/ThemeStore';

export default {
  name: "ZestView",
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
        }
      ],
      title: "Freelancing",
      description: "As a freelancer, I have had the privilege of working on a wide range of fascinating projects. This has allowed me to gain a wealth of experience and expertise in various fields, and has given me the opportunity to work with clients from all over the world. Overall, my experiences as a freelancer have been incredibly rewarding, and I have enjoyed the flexibility and autonomy that comes with this type of work.",
    }
  },
  computed: {
    theme() {
        return useThemeStore().theme;
    },
  }
}
</script>
