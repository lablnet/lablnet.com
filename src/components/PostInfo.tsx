import { h, Component, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import TagComp from './TagComp'; // Assuming TagComp is converted to Preact
import CollaboratorComp from './CollaboratorComp'; // Assuming CollaboratorComp is converted to Preact
import LoaderComp from './LoaderComp'; // Assuming LoaderComp is converted to Preact

export default function PostInfo({ 
    stack, 
    title, 
    subtitle, 
    codeURL = null, 
    siteURL = null, 
    linkText = "View Site", 
    coverPic = null,
    collaborators = [] 
}) {
    const [contributors, setContributors] = useState([]);
    const [loading, setLoading] = useState(false);
    const theme = 'light'; // This should be dynamically set based on your theme logic

    useEffect(() => {
        getContributors();
    }, []);

    async function getContributors() {
        // ...same logic as in Vue component...
    }

    return (
        <section class="mb-3 mt-5">
          <h3 class="title" id={title}>
            <a class="flex mx-3" href={'#' + title}>
              <img
                src={theme === 'dark' ? '../assets/icons/white/link.svg' : '../assets/icons/link.svg'}
                alt={title}
              />
              <span class="mx-3">{title}</span>
            </a>
          </h3>
          <h3 class="text mt-2 mb-4 opacity-70">{subtitle}</h3>
    
          <section class="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {codeURL && (
              <div class="col-span-1">
                <span class="text-gray-500 dark:text-white font-medium mb-3">Code</span>
                <div>
                  <a
                    href={'https://github.com/' + codeURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex font-medium mt-2"
                  >
                    {/* SVG for GitHub */}
                    <u class="px-2 dark:text-white">{codeURL}</u>
                  </a>
                </div>
              </div>
            )}
    
            <div class="col-span-1">
              <span class="text-gray-500 dark:text-white font-medium mb-3">Stack</span>
              <div class="flex flex-wrap gap-5">
                {stack.map(item => (
                  <TagComp text={item} key={item} />
                ))}
              </div>
            </div>
    
            {siteURL && (
              <div class="col-span-1">
                <span class="text-gray-500 dark:text-white font-medium mb-3">Live</span>
                <div>
                  <a
                    href={siteURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex font-medium mt-2"
                  >
                    {/* SVG for external link */}
                    <u class="ml-2 px-2 dark:text-white">{linkText}</u>
                  </a>
                </div>
              </div>
            )}
    
            <div class="col-span-1">
              {contributors.length > 0 && (
                <Fragment>
                  <span class="text-gray-500 dark:text-white font-medium mb-3">Collaborators</span>
                  <div class="flex flex-wrap gap-5">
                    {contributors.map(item => (
                      <CollaboratorComp
                        name={item.name}
                        picture={item.pic}
                        link={item.link}
                        contributions={item.contributions}
                        key={item.name}
                      />
                    ))}
                  </div>
                </Fragment>
              )}
              <LoaderComp loading={loading} />
            </div>
          </section>
        </section>
      );
}