<template>
  <div class="resume">
    <!-- App Bar -->
    <nav class="app-bar">
      <div class="app-bar-container">
        <div class="app-bar-content">
          <h2 class="app-bar-title">{{ name }}</h2>
          <div class="app-bar-actions">
            <router-link to="/requisites" class="app-bar-button">
              Реквизиты
            </router-link>
            <a :href="`mailto:${email}`" class="app-bar-link">
              <span>✉</span>
            </a>
            <a :href="`tel:${phone}`" class="app-bar-link">
              <span>📱</span>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <div class="resume-container">
      <!-- Left Sidebar -->
      <aside class="sidebar">
        <div class="photo-wrapper">
          <img :src="photoSrc" alt="Фото" class="photo" />
        </div>
        
        <div class="sidebar-section">
          <h3 class="sidebar-title">Контакты</h3>
          <div class="contact-list">
            <a :href="`mailto:${email}`" class="contact-link">
              <span class="contact-icon">✉</span>
            <span>{{ email }}</span>
          </a>
            <a :href="`tel:${phone}`" class="contact-link">
            <span class="contact-icon">📱</span>
            <span>{{ phone }}</span>
          </a>
          <a 
            v-if="github"
            :href="github" 
            target="_blank"
              class="contact-link"
          >
            <span class="contact-icon">💻</span>
            <span>GitHub</span>
          </a>
          </div>
        </div>

        <div class="sidebar-section">
          <h3 class="sidebar-title">Технологии</h3>
          <div class="tech-tags">
            <span 
              v-for="tech in technologies" 
              :key="tech"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="sidebar-section">
          <h3 class="sidebar-title">Социальные сети</h3>
          <div class="social-list">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url" 
              target="_blank"
              class="social-link"
            >
              <span class="social-icon">{{ social.icon }}</span>
              <span class="social-name">{{ social.name }}</span>
            </a>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <header class="header">
          <h1 class="name">{{ name }}</h1>
          <p class="title">{{ title }}</p>
          <p class="description">{{ description }}</p>
        </header>

        <section class="content-section">
          <h2 class="section-title">
            <span class="title-icon">👤</span>
            О себе
          </h2>
          <p class="section-text">{{ aboutText }}</p>
        </section>

        <section class="content-section">
          <h2 class="section-title">
            <span class="title-icon">💼</span>
            Опыт работы
          </h2>
          <div class="experience-list">
            <div 
              v-for="(exp, index) in experience" 
              :key="index"
              class="experience-item"
            >
              <div class="experience-header">
                <h3 class="experience-position">{{ exp.position }}</h3>
                <span class="experience-period">{{ exp.period }}</span>
              </div>
              <p class="experience-company">{{ exp.company }}</p>
              <ul class="experience-duties">
                <li v-for="(duty, i) in exp.duties" :key="i">{{ duty }}</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">
            <span class="title-icon">🎓</span>
            Образование
          </h2>
          <div class="education-list">
            <div 
              v-for="(edu, index) in education" 
              :key="index"
              class="education-item"
            >
              <h3 class="education-degree">{{ edu.degree }}</h3>
              <p class="education-institution">{{ edu.institution }}</p>
              <p class="education-period">{{ edu.period }}</p>
        </div>
      </div>
    </section>

      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      name: 'Заленек Михаил Михайлович',
      title: 'Программист',
      description: 'Создаю современные веб-приложения и программные решения',
      aboutText: 'Опытный программист с многолетним опытом в разработке программного обеспечения. Специализируюсь на системном программировании, создании веб-приложений и разработке сайтов различной сложности. Работаю с современными технологиями и фреймворками, создаю масштабируемые и производительные решения. Постоянно изучаю новые подходы и инструменты, чтобы предлагать клиентам актуальные и эффективные решения. Владею полным циклом разработки от проектирования архитектуры до реализации и поддержки готовых продуктов.',
      socialLinks: [
        { name: 'Telegram', icon: '💬', url: 'https://t.me/MihailMsk2025' },
        { name: 'МАКС', icon: '💬', url: 'https://max.ru/u/f9LHodD0cOJMvce7BJe1x6FFQi3YlZlYbsCjddrWqRrNzMG723tvI8jgWnQ' }
      ],
      technologies: [
        'JavaScript', 'TypeScript', 'Vue.js', 'Node.js', 
        'Python', 'MongoDB', 'PostgreSQL', 'Git', 
        'Webpack', 'C', 'C++', 'Qt', 'MATLAB', 'Linux'
      ],
      email: 'Zalenekm@bk.ru',
      phone: '+7 (917) 599-15-12',
      github: 'https://github.com/Gerald1k',
      experience: [
        {
          position: 'Разработчик',
          company: 'АО "Корпорация Комета"',
          period: '2023 - настоящее время',
          duties: [
            'Разработка и оптимизация математических алгоритмов для обработки данных',
            'Реализация систем обработки телеметрии со спутников',
            'Интеграция геоданных с визуализацией на картографических проекциях',
            'Проектирование архитектуры и технических решений',
            'Подготовка технической документации и спецификаций'
          ]
        },
        {
          position: 'Lead Developer',
          company: 'ООО "СМС"',
          period: '2025 - настоящее время',
          duties: [
            'Разработка корпоративных приложений для автоматизации бизнес-процессов',
            'Проектирование системной архитектуры и выбор технологического стека',
            'Техническое руководство командой разработки',
            'Code review и поддержание стандартов кодирования',
            'Планирование спринтов и распределение задач в команде'
          ]
        }
      ],
      education: [
        {
          degree: 'Информатика и вычислительная техника',
          institution: 'Московский технический университет связи и информатики',
          period: '2023 - настоящее время'
        },
        {
          degree: 'Информатика и вычислительная техника',
          institution: 'РТУ МИРЭА',
          period: '2021 - 2023'
        }
      ],
      requisites: {
        fullName: 'Иванов Иван Иванович',
        inn: '123456789012',
        ogrnip: '123456789012345',
        registrationAddress: 'г. Москва, ул. Примерная, д. 1, кв. 1',
        account: '40802810100000000001',
        correspondentAccount: '30101810100000000001',
        bik: '044525225',
        bankName: 'ПАО "Примерный Банк"',
        bankInn: '7707083893',
        bankKpp: '773601001'
      }
    };
  },
  computed: {
    photoSrc() {
      return require('../../assets/images/myFoto.jpg');
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.resume {
  min-height: 100vh;
  background: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
               'Helvetica Neue', Arial, sans-serif;
  padding-top: 0;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
}

/* App Bar */
.app-bar {
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  margin-bottom: 40px;
}

.app-bar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.app-bar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.app-bar-title {
  font-size: 24px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.app-bar-actions {
  display: flex;
  gap: 15px;
}

.app-bar-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f5f5f5;
  color: #2c3e50;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.3s ease;
}

.app-bar-link:hover {
  background: #3498db;
  color: #ffffff;
  transform: scale(1.1);
}

.app-bar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 6px;
  background: #3498db;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.app-bar-button:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
}

.resume-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 40px;
  background: #ffffff;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  overflow: hidden;
}

/* Sidebar */
.sidebar {
  background: #2c3e50;
  color: #ffffff;
  padding: 40px 30px;
}

.photo-wrapper {
  margin-bottom: 40px;
  text-align: center;
}

.photo {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.sidebar-section {
  margin-bottom: 40px;
}

.sidebar-section:last-child {
  margin-bottom: 0;
}

.sidebar-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ffffff;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

/* Contacts */
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ecf0f1;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.contact-link:hover {
  color: #3498db;
}

.contact-icon {
  font-size: 18px;
  width: 24px;
  text-align: center;
}

/* Social Links */
.social-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ecf0f1;
  text-decoration: none;
  font-size: 14px;
  padding: 12px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateX(5px);
}

.social-icon {
  font-size: 20px;
  width: 24px;
  text-align: center;
}

.social-name {
  font-weight: 500;
  color: #ecf0f1;
}

/* Technologies */
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.15);
  color: #ecf0f1;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: background 0.2s;
}

.tech-tag:hover {
  background: rgba(255, 255, 255, 0.25);
}

/* Main Content */
.main-content {
  padding: 50px 40px;
  background: #ffffff;
}

.header {
  margin-bottom: 50px;
  padding-bottom: 30px;
  border-bottom: 2px solid #e8e8e8;
}

.name {
  font-size: 42px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 10px;
}

.title {
  font-size: 22px;
  color: #3498db;
  font-weight: 500;
  margin-bottom: 15px;
}

.description {
  font-size: 16px;
  color: #7f8c8d;
  line-height: 1.6;
  max-width: 700px;
}

/* Content Sections */
.content-section {
  margin-bottom: 50px;
}

.content-section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e8e8e8;
}

.title-icon {
  font-size: 24px;
}

.section-text {
  font-size: 16px;
  line-height: 1.8;
  color: #34495e;
  text-align: justify;
}

/* Experience */
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.experience-item {
  padding-left: 20px;
  border-left: 3px solid #3498db;
  padding-bottom: 25px;
}

.experience-item:last-child {
  padding-bottom: 0;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 10px;
}

.experience-position {
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
}

.experience-period {
  font-size: 14px;
  color: #7f8c8d;
  font-weight: 500;
}

.experience-company {
  font-size: 16px;
  color: #3498db;
  font-weight: 500;
  margin-bottom: 12px;
}

.experience-duties {
  list-style: none;
  padding-left: 0;
}

.experience-duties li {
  font-size: 15px;
  color: #34495e;
  line-height: 1.8;
  padding-left: 20px;
  position: relative;
  margin-bottom: 8px;
}

.experience-duties li:before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #3498db;
  font-weight: bold;
}

/* Education */
.education-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.education-item {
  padding-left: 20px;
  border-left: 3px solid #3498db;
}

.education-degree {
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 6px;
}

.education-institution {
  font-size: 16px;
  color: #3498db;
  font-weight: 500;
  margin-bottom: 4px;
}

.education-period {
  font-size: 14px;
  color: #7f8c8d;
}

/* Responsive */
@media (max-width: 968px) {
  .resume-container {
    grid-template-columns: 1fr;
  }

  .sidebar {
    order: 2;
  }

  .main-content {
    order: 1;
  }

  .photo {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 768px) {
  .resume {
    padding-top: 0;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }
  
  .app-bar-content {
    padding: 12px 0;
  }

  .app-bar-title {
    font-size: 20px;
  }
  
  .app-bar-link {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
  
  .main-content {
    padding: 30px 20px;
  }

  .sidebar {
    padding: 30px 20px;
  }

  .name {
    font-size: 32px;
  }

  .title {
    font-size: 18px;
  }

  .section-title {
    font-size: 24px;
  }
  
  .experience-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
