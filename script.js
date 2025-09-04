// =================== UI UPDATES ===================
function updateUIForDevice() {
    const deviceInfo = document.getElementById('deviceInfo');
    const btnText = document.getElementById('btnText');
    const btnSubtitle = document.getElementById('btnSubtitle');
    const utmDisplay = document.getElementById('utmDisplay');
    
    // Atualizar informações do dispositivo
    if (deviceInfo) {
        switch(device) {
            case 'ios':
                deviceInfo.textContent = '📱 Dispositivo iOS detectado';
                btnText.textContent = 'Abrir na App Store';
                break;
            case 'android':
                deviceInfo.textContent = '🤖 Dispositivo Android detectado';
                btnText.textContent = 'Abrir no Google Play';
                break;
            default:
                deviceInfo.textContent = '💻 Desktop - Escolha sua plataforma';
                btnText.textContent = 'Baixar App';
        }
    }
    
    if (btnSubtitle) {
        btnSubtitle.textContent = 'OneLink + UTM';
    }
    
    // Mostrar parâmetros UTM ativos
    if (utmDisplay) {
        utmDisplay.textContent = `UTM: ${activeParams}`;
    }
    
    // Atualizar debug info
    updateDebugInfo('platform', navigator.platform);
    updateDebugInfo('detectedDevice', device);
    updateDebugInfo('userAgent', navigator.userAgent.substring(0, 50) + '...');
}

// =================== UTILITY FUNCTIONS ===================
function updateDebugInfo(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = value;
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('📋 URL copiada para clipboard');
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}

// =================== EVENT LISTENERS ===================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando AppsFlyer Certificate App');
    
    // Atualizar UI baseada no dispositivo
    updateUIForDevice();
    
    // Event listener para copiar URL
    const copyBtn = document.getElementById('copyUrlBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const url = document.getElementById('qrUrl').textContent;
            copyToClipboard(url);
            
            // Feedback visual
            this.textContent = '✅';
            setTimeout(() => {
                this.textContent = '📋';
            }, 2000);
        });
    }
    
    // Event listener para regenerar QR
    const regenerateBtn = document.getElementById('regenerateQr');
    if (regenerateBtn) {
        regenerateBtn.addEventListener('click', generateQRCode);
    }
    
    // Event listeners para botões das lojas (fallback)
    const appStoreBtn = document.getElementById('appStoreBtn');
    const googlePlayBtn = document.getElementById('googlePlayBtn');
    
    if (appStoreBtn) {
        appStoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
        });
    }
    
    if (googlePlayBtn) {
        googlePlayBtn.addEventListener('click', function(e) {
            e.preventDefault();
        });
    }

    new appsflyer.SmartBanner({
        title: "AppsFlyer",
    })
});

// =================== WINDOW EVENT HANDLERS ===================
window.addEventListener('load', function() {
    console.log('🎯 Página completamente carregada');
    
    // Verificar novamente o status do AppsFlyer após carregamento completo
    setTimeout(() => {
        if (typeof window.AF !== 'undefined') {
            updateDebugInfo('sdkStatus', '✅ SDK carregado após window.load');
        }
    }, 500);
});