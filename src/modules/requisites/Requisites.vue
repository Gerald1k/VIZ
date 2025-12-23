<template>
  <div class="requisites-page">
    <!-- App Bar -->
    <nav class="app-bar">
      <div class="app-bar-container">
        <div class="app-bar-content">
          <router-link to="/" class="app-bar-title-link">
            <h2 class="app-bar-title">{{ name }}</h2>
          </router-link>
          <div class="app-bar-actions">
            <router-link to="/" class="app-bar-button">
              На главную
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

    <div class="requisites-container">
      <div class="requisites-content">
        <h1 class="page-title">Реквизиты</h1>

        <div class="requisites">
          <div class="requisites-section">
            <div class="section-header">
              <h3 class="requisites-subtitle">Индивидуальный предприниматель</h3>
              <button class="copy-all-button" @click="copyAllRequisites('ip')" title="Копировать все реквизиты">
                📋
              </button>
            </div>
            <div class="requisites-grid">
              <div class="requisite-item" @click="copyToClipboard(requisites.fullName)">
                <span class="requisite-label">ФИО:</span>
                <span class="requisite-value">{{ requisites.fullName }}</span>
              </div>
              <div class="requisite-item" @click="copyToClipboard(requisites.inn)">
                <span class="requisite-label">ИНН:</span>
                <span class="requisite-value">{{ requisites.inn }}</span>
              </div>
              <div v-if="requisites.ogrnip" class="requisite-item" @click="copyToClipboard(requisites.ogrnip)">
                <span class="requisite-label">ОГРНИП:</span>
                <span class="requisite-value">{{ requisites.ogrnip }}</span>
              </div>
              <div v-if="requisites.openingDate" class="requisite-item" @click="copyToClipboard(requisites.openingDate)">
                <span class="requisite-label">Дата открытия:</span>
                <span class="requisite-value">{{ requisites.openingDate }}</span>
              </div>
              <div v-if="requisites.okpo" class="requisite-item" @click="copyToClipboard(requisites.okpo)">
                <span class="requisite-label">ОКПО:</span>
                <span class="requisite-value">{{ requisites.okpo }}</span>
              </div>
              <div v-if="requisites.okvedMain" class="requisite-item" @click="copyToClipboard(requisites.okvedMain)">
                <span class="requisite-label">ОКВЭД основной:</span>
                <span class="requisite-value">{{ requisites.okvedMain }}</span>
              </div>
              <div v-if="requisites.okvedAdditional" class="requisite-item" @click="copyToClipboard(requisites.okvedAdditional)">
                <span class="requisite-label">ОКВЭД дополнительный:</span>
                <span class="requisite-value">{{ requisites.okvedAdditional }}</span>
              </div>
              <div v-if="requisites.registrationAddress" class="requisite-item" @click="copyToClipboard(requisites.registrationAddress)">
                <span class="requisite-label">Адрес регистрации:</span>
                <span class="requisite-value">{{ requisites.registrationAddress }}</span>
              </div>
            </div>
          </div>

          <div class="requisites-section">
            <div class="section-header">
              <h3 class="requisites-subtitle">Банковские реквизиты (Точка банк)</h3>
              <button class="copy-all-button" @click="copyAllRequisites('point')" title="Копировать все реквизиты">
                📋
              </button>
            </div>
            <div class="requisites-grid">
              <div class="requisite-item" @click="copyToClipboard(requisites.account)">
                <span class="requisite-label">Расчетный счет:</span>
                <span class="requisite-value">{{ requisites.account }}</span>
              </div>
              <div class="requisite-item" @click="copyToClipboard(requisites.correspondentAccount)">
                <span class="requisite-label">Корреспондентский счет:</span>
                <span class="requisite-value">{{ requisites.correspondentAccount }}</span>
              </div>
              <div class="requisite-item" @click="copyToClipboard(requisites.bik)">
                <span class="requisite-label">БИК:</span>
                <span class="requisite-value">{{ requisites.bik }}</span>
              </div>
              <div class="requisite-item" @click="copyToClipboard(requisites.bankName)">
                <span class="requisite-label">Наименование банка:</span>
                <span class="requisite-value">{{ requisites.bankName }}</span>
              </div>
              <div v-if="requisites.bankInn" class="requisite-item" @click="copyToClipboard(requisites.bankInn)">
                <span class="requisite-label">ИНН банка:</span>
                <span class="requisite-value">{{ requisites.bankInn }}</span>
              </div>
              <div v-if="requisites.bankKpp" class="requisite-item" @click="copyToClipboard(requisites.bankKpp)">
                <span class="requisite-label">КПП банка:</span>
                <span class="requisite-value">{{ requisites.bankKpp }}</span>
              </div>
            </div>
          </div>

          <div class="requisites-section">
            <div class="section-header">
              <h3 class="requisites-subtitle">Банковские реквизиты (Сбербанк)</h3>
              <button class="copy-all-button" @click="copyAllRequisites('sberbank')" title="Копировать все реквизиты">
                📋
              </button>
            </div>
            <div class="requisites-grid">
              <div class="requisite-item" @click="copyToClipboard(sberbank.account)">
                <span class="requisite-label">Расчетный счет:</span>
                <span class="requisite-value">{{ sberbank.account }}</span>
              </div>
              <div class="requisite-item" @click="copyToClipboard(sberbank.correspondentAccount)">
                <span class="requisite-label">Корреспондентский счет:</span>
                <span class="requisite-value">{{ sberbank.correspondentAccount }}</span>
              </div>
              <div class="requisite-item" @click="copyToClipboard(sberbank.bik)">
                <span class="requisite-label">БИК:</span>
                <span class="requisite-value">{{ sberbank.bik }}</span>
              </div>
              <div class="requisite-item" @click="copyToClipboard(sberbank.bankName)">
                <span class="requisite-label">Наименование банка:</span>
                <span class="requisite-value">{{ sberbank.bankName }}</span>
              </div>
              <div v-if="sberbank.bankInn" class="requisite-item" @click="copyToClipboard(sberbank.bankInn)">
                <span class="requisite-label">ИНН банка:</span>
                <span class="requisite-value">{{ sberbank.bankInn }}</span>
              </div>
              <div v-if="sberbank.bankKpp" class="requisite-item" @click="copyToClipboard(sberbank.bankKpp)">
                <span class="requisite-label">КПП банка:</span>
                <span class="requisite-value">{{ sberbank.bankKpp }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Notification -->
    <transition name="fade">
      <div v-if="showNotification" class="notification">
        {{ notificationText }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Requisites',
  data() {
    return {
      name: 'Заленек Михаил Михайлович',
      email: 'Zalenekm@bk.ru',
      phone: '+7 (917) 599-15-12',
      showNotification: false,
      notificationText: '',
      requisites: {
        fullName: 'Заленек Михаил Михайлович',
        inn: '711611185218',
        ogrnip: '32571 00000 68031',
        openingDate: '30 октября 2025',
        okpo: '2046 6953 13',
        okvedMain: '62.01',
        okvedAdditional: '62.02, 62.03, 62.09',
        registrationAddress: '',
        account: '40802810920000801165',
        correspondentAccount: '30101810745374525104',
        bik: '044525104',
        bankName: 'ООО "Банк Точка"',
        bankInn: '',
        bankKpp: ''
      },
      sberbank: {
        fullName: 'ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ ЗАЛЕНЕК МИХАИЛ МИХАЙЛОВИЧ',
        inn: '711611185218',
        ogrnip: '325710000068031',
        account: '40802 810 1 3872 0043860',
        bankName: 'ПАО Сбербанк',
        bik: '044525225',
        correspondentAccount: '30101 810 4 0000 0000225',
        bankInn: '7707083893',
        bankKpp: '773643001',
        accountOpeningDate: '01.11.2025',
        branchAddress: 'г. Москва, улица Старокачаловская, дом 5А, пом. 1/1'
      }
    };
  },
  methods: {
    async copyToClipboard(text) {
      if (!text) return;
      
      try {
        await navigator.clipboard.writeText(text);
        this.notificationText = 'Скопировано!';
        this.showNotification = true;
        setTimeout(() => {
          this.showNotification = false;
        }, 2000);
      } catch (err) {
        // Fallback для старых браузеров
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          this.notificationText = 'Скопировано!';
          this.showNotification = true;
          setTimeout(() => {
            this.showNotification = false;
          }, 2000);
        } catch (err) {
          this.notificationText = 'Ошибка копирования';
          this.showNotification = true;
          setTimeout(() => {
            this.showNotification = false;
          }, 2000);
        }
        document.body.removeChild(textArea);
      }
    },
    async copyAllRequisites(type) {
      const lines = [];
      
      if (type === 'ip') {
        // Данные индивидуального предпринимателя
        if (this.requisites.fullName) {
          lines.push('ФИО');
          lines.push(this.requisites.fullName);
          lines.push('');
        }
        if (this.requisites.inn) {
          lines.push('ИНН');
          lines.push(this.requisites.inn);
          lines.push('');
        }
        if (this.requisites.ogrnip) {
          lines.push('ОГРНИП');
          lines.push(this.requisites.ogrnip);
          lines.push('');
        }
        if (this.requisites.openingDate) {
          lines.push('Дата открытия');
          lines.push(this.requisites.openingDate);
          lines.push('');
        }
        if (this.requisites.okpo) {
          lines.push('ОКПО');
          lines.push(this.requisites.okpo);
          lines.push('');
        }
        if (this.requisites.okvedMain) {
          lines.push('ОКВЭД основной');
          lines.push(this.requisites.okvedMain);
          lines.push('');
        }
        if (this.requisites.okvedAdditional) {
          lines.push('ОКВЭД дополнительный');
          lines.push(this.requisites.okvedAdditional);
          lines.push('');
        }
        if (this.requisites.registrationAddress) {
          lines.push('Адрес регистрации');
          lines.push(this.requisites.registrationAddress);
        }
      } else if (type === 'point') {
        // Данные Точка банка
        const data = this.requisites;
        if (data.account) {
          lines.push('Расчетный счет');
          lines.push(data.account);
          lines.push('');
        }
        if (data.correspondentAccount) {
          lines.push('Корреспондентский счет');
          lines.push(data.correspondentAccount);
          lines.push('');
        }
        if (data.bik) {
          lines.push('БИК');
          lines.push(data.bik);
          lines.push('');
        }
        if (data.bankName) {
          lines.push('Наименование банка');
          lines.push(data.bankName);
          lines.push('');
        }
        if (data.bankInn) {
          lines.push('ИНН банка');
          lines.push(data.bankInn);
          lines.push('');
        }
        if (data.bankKpp) {
          lines.push('КПП банка');
          lines.push(data.bankKpp);
        }
      } else if (type === 'sberbank') {
        // Данные Сбербанка
        const data = this.sberbank;
        if (data.account) {
          lines.push('Расчетный счет');
          lines.push(data.account);
          lines.push('');
        }
        if (data.correspondentAccount) {
          lines.push('Корреспондентский счет');
          lines.push(data.correspondentAccount);
          lines.push('');
        }
        if (data.bik) {
          lines.push('БИК');
          lines.push(data.bik);
          lines.push('');
        }
        if (data.bankName) {
          lines.push('Наименование банка');
          lines.push(data.bankName);
          lines.push('');
        }
        if (data.bankInn) {
          lines.push('ИНН банка');
          lines.push(data.bankInn);
          lines.push('');
        }
        if (data.bankKpp) {
          lines.push('КПП банка');
          lines.push(data.bankKpp);
        }
      } else {
        return;
      }

      const text = lines.join('\n');
      await this.copyToClipboard(text);
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

.requisites-page {
  min-height: 100vh;
  background: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
               'Helvetica Neue', Arial, sans-serif;
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

.app-bar-title-link {
  text-decoration: none;
  color: inherit;
}

.app-bar-title {
  font-size: 24px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
  transition: color 0.3s;
}

.app-bar-title-link:hover .app-bar-title {
  color: #3498db;
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

/* Requisites Container */
.requisites-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px;
}

.requisites-content {
  background: #ffffff;
  padding: 50px;
  border-radius: 8px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
}

.page-title {
  font-size: 42px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 3px solid #3498db;
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

/* Requisites */
.requisites {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.requisites-section {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e8e8e8;
}

.requisites-subtitle {
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.copy-all-button {
  background: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
}

.copy-all-button:hover {
  background: #2980b9;
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);
}

.copy-all-button:active {
  transform: scale(0.95);
}

.requisites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
}

.requisite-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 12px;
  background: #ffffff;
  border-radius: 6px;
  border: 1px solid #e8e8e8;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
}

.requisite-item:hover {
  background: #f0f7ff;
  border-color: #3498db;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(52, 152, 219, 0.15);
}

.requisite-item:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(52, 152, 219, 0.1);
}

.requisite-label {
  font-size: 13px;
  color: #7f8c8d;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.requisite-value {
  font-size: 15px;
  color: #2c3e50;
  font-weight: 500;
  word-break: break-word;
}

/* Notification */
.notification {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #2c3e50;
  color: #ffffff;
  padding: 15px 25px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  font-weight: 500;
  z-index: 1000;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .requisites-content {
    padding: 30px 20px;
  }

  .page-title {
    font-size: 32px;
  }

  .app-bar-button {
    font-size: 13px;
    padding: 8px 16px;
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

  .requisites-grid {
    grid-template-columns: 1fr;
  }

  .requisites-section {
    padding: 20px;
  }

  .notification {
    bottom: 20px;
    right: 20px;
    left: 20px;
    right: 20px;
    padding: 12px 20px;
    font-size: 13px;
  }
}
</style>

