import clsx from 'clsx';
import styles from './styles.module.css';
import { FaComments, FaBolt, FaSearch } from 'react-icons/fa';

const FeatureList = [
  {
    title: 'AVA Chat',
    icon: <FaComments />,
    description: (
      <>
        Experience ChatGPT-style AI conversations within your secure environment. 
        Create documents, analyze data, write code, and get instant answers - all 
        while your data stays protected in your corporate cloud.
      </>
    ),
    link: '/docs/features/chat/overview',
  },
  {
    title: 'AVA Tasks',
    icon: <FaBolt />,
    description: (
      <>
        Automate repetitive work with our revolutionary SuperPrompt technology. 
        Build powerful AI workflows once, then reuse and share them across your 
        team for consistent, efficient results.
      </>
    ),
    link: '/docs/features/tasks/overview',
  },
  {
    title: 'Knowledge Search',
    icon: <FaSearch />,
    description: (
      <>
        Ask questions in natural language and get instant answers from your 
        entire document library. AVA searches through SharePoint, contracts, 
        policies, and more - with citations for every answer.
      </>
    ),
    link: '/docs/features/knowledge-search/overview',
  },
];

function Feature({icon, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.feature}>
        <div className={styles.featureIcon}>{icon}</div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link} className={styles.featureLink}>
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.featuresTitle}>Powerful AI Features for Your Enterprise</h2>
            <p className={styles.featuresSubtitle}>
              Three powerful tools that work together to transform how your team works
            </p>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}