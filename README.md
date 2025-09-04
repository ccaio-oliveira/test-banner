# AppsFlyer Certificate App - Website

Este é um site completo para implementar e testar **SmartBanner**, **OneLink** e **SmartScript** do AppsFlyer.

## 📁 Estrutura do Projeto

```
website/
├── index.html          # Página principal com SmartBanner e SmartScript
├── styles.css          # Estilos CSS responsivos
├── script.js           # Lógica AppsFlyer + OneLink + QR Code
└── README.md          # Esta documentação
```

## 🎯 Funcionalidades Implementadas

### ✅ SmartBanner com OneLink
- **Meta tags configuradas** para iOS e Android
- **Detecção automática** de dispositivo
- **Parâmetros UTM** integrados
- **OneLink generation** dinâmica

### ✅ SmartScript em Botões
- **3 botões SmartScript** com diferentes parâmetros
- **Tracking automático** de cliques
- **Fallback** para redirecionamento manual
- **Event tracking** personalizado

### ✅ QR Code Generator
- **QR Code dinâmico** com OneLink
- **Parâmetros customizáveis** por QR
- **Regeneração automática** com novos parâmetros
- **Copy-to-clipboard** da URL

### ✅ Debug & Testing
- **Device detection** em tempo real
- **AppsFlyer SDK status** monitoring
- **URL parameters** parsing
- **Event tracking** log

## 🔧 Configuração Rápida

### 1. Configure suas chaves no `script.js`

```javascript
const APPSFLYER_CONFIG = {
    // SUBSTITUA pelos seus valores reais:
    onelink_id: 'SEU_ONELINK_ID',           // Ex: 'abc123'
    onelink_subdomain: 'SEU_SUBDOMAIN',      // Ex: 'seuapp'
    
    // URLs das lojas (fallback)
    app_store_url: 'https://apps.apple.com/app/id123456789',
    google_play_url: 'https://play.google.com/store/apps/details?id=com.seuapp',
    
    // IDs dos apps
    ios_app_id: 'SEU_IOS_APP_ID',
    android_package_name: 'SEU_ANDROID_PACKAGE'
};
```

### 2. Configure as meta tags no `index.html`

```html
<!-- Substitua pelos seus valores reais -->
<meta name="apple-itunes-app" content="app-id=SEU_IOS_APP_ID">
<meta name="google-play-app" content="app-id=SEU_ANDROID_PACKAGE_NAME">

<meta name="af-smart-banner" 
      data-onelink-subdomain="SEU_ONELINK_SUBDOMAIN"
      data-onelink-id="SEU_ONELINK_ID">
```

### 3. Configure o SmartScript no `index.html`

```javascript
window.AF_CONFIG = {
    onelink_id: 'SEU_ONELINK_ID',
    onelink_subdomain: 'SEU_SUBDOMAIN',
    // Outros parâmetros já configurados...
};
```

## � Funcionalidades Detalhadas

### 📱 SmartBanner
- Detecta automaticamente iOS/Android/Desktop
- Gera OneLink URLs com parâmetros UTM
- Mostra informações do dispositivo em tempo real
- Parâmetros configuráveis por campanha

### 🔗 SmartScript Buttons
1. **Download Inteligente**: Botão principal com tracking básico
2. **Oferta Especial**: Botão com parâmetros de promoção
3. **Experimente Agora**: Botão com tracking de conversão

Cada botão gera OneLink URLs únicos com:
- `af_ad`: identificador único do botão
- `af_adset`: grupo de botões
- `button_position`: posição do botão
- `click_timestamp`: timestamp do clique

### 📱 QR Code Generator
- **Geração automática** na carga da página
- **Parâmetros específicos** para QR (`media_source: qr_code`)
- **Regeneração** com novos timestamps
- **URL copiável** para compartilhamento
- **Visual customizável** (200x200px, cores configuráveis)

### 🔍 Debug Panel
Mostra em tempo real:
- **Device Detection**: User Agent, Platform, Device Type
- **AppsFlyer Status**: SDK loading status, OneLink ID
- **URL Parameters**: Parse automático de query strings
- **Last Events**: Último evento trackado

## 📊 Event Tracking Implementado

O sistema tracka automaticamente:

```javascript
// Eventos automáticos
- page_view: quando a página carrega
- smart_script_click: cliques nos botões SmartScript
- qr_code_generated: quando QR é gerado
- app_store_click / google_play_click: cliques diretos nas lojas

// Eventos personalizáveis
trackCustomEvent('evento_customizado', {
    parametro1: 'valor1',
    parametro2: 'valor2'
});
```

## 🌐 URLs OneLink Geradas

Exemplo de URL gerada pelo sistema:

```
https://seuapp.onelink.me/abc123?
media_source=website&
campaign=landing_page&
af_channel=organic&
af_ad=main_banner&
utm_source=website&
utm_medium=banner&
utm_campaign=app_download&
device_type=ios&
timestamp=1693834567890&
button_position=1
```

## 🧪 Como Testar

### 1. Teste Local
```bash
# Servir arquivos localmente
cd website/
python3 -m http.server 8000
# Acesse: http://localhost:8000
```

### 2. Teste de Dispositivos
- **iOS**: Use Safari no iPhone
- **Android**: Use Chrome no Android  
- **Desktop**: Qualquer navegador moderno

### 3. Teste de Parâmetros
```
# Adicione parâmetros na URL para testar
http://localhost:8000?utm_source=teste&campaign=debug
```

### 4. Debug Console
Abra DevTools → Console para ver logs:
```
🚀 Inicializando AppsFlyer Certificate App
✅ AppsFlyer Smart Script detectado
🔗 SmartScript Click: main_banner
📱 QR Code gerado: https://...
```

## 🔧 Customização Avançada

### Personalizar Parâmetros OneLink
```javascript
// No script.js, modifique default_params:
default_params: {
    media_source: 'seu_valor',
    campaign: 'sua_campanha',
    af_channel: 'seu_canal',
    // Adicione seus parâmetros customizados
    custom_param1: 'valor_customizado'
}
```

### Personalizar Styling
```css
/* No styles.css */
.smart-btn.primary {
    background: linear-gradient(135deg, #SUA_COR1, #SUA_COR2);
}
```

### Adicionar Novos Botões SmartScript
```html
<!-- No index.html -->
<button class="smart-btn custom" data-af-smart-btn="true">
    <span class="icon">🆕</span>
    <div class="btn-content">
        <strong>Novo Botão</strong>
        <small>Com tracking personalizado</small>
    </div>
</button>
```

## 📋 Checklist de Implementação

- [ ] **Substituir** `SEU_ONELINK_ID` pelo ID real
- [ ] **Substituir** `SEU_SUBDOMAIN` pelo subdomínio real
- [ ] **Configurar** App IDs para iOS e Android
- [ ] **Testar** em dispositivos reais (iOS/Android)
- [ ] **Verificar** geração de OneLink URLs
- [ ] **Confirmar** funcionamento do QR Code
- [ ] **Validar** tracking de eventos
- [ ] **Testar** fallback para quando AppsFlyer não carrega

## 🔗 Links Úteis para Configuração

- [AppsFlyer OneLink Setup](https://dev.appsflyer.com/hc/docs/onelink-overview)
- [Smart Banner Documentation](https://dev.appsflyer.com/hc/docs/smart-banners)
- [SmartScript Implementation](https://dev.appsflyer.com/hc/docs/onelink-smart-script)
- [Attribution Parameters](https://dev.appsflyer.com/hc/docs/attribution-parameters)

## 🚀 Deploy

Para produção:
1. **Configure** todas as variáveis de ambiente
2. **Teste** em staging primeiro
3. **Valide** URLs OneLink em dispositivos reais
4. **Configure** analytics/tracking adicional se necessário

---

**✨ Estrutura completa para AppsFlyer Certificate - Pronta para configuração!** 

Agora você só precisa **substituir as configurações** pelos seus valores reais e está pronto para testar SmartBanner, SmartScript e QR Codes! 🎯
