// Sidebar Toggle Functionality - Versão Simplificada e Robusta
(function() {
  'use strict';
  
  console.log('🔧 Sidebar Toggle Script Loaded');
  
  // Função para alternar a visibilidade da sidebar
  function toggleSidebar() {
    console.log('🔄 toggleSidebar() chamada');
    
    const body = document.body;
    const sidebar = document.querySelector('#quarto-sidebar');
    
    if (!sidebar) {
      console.error('❌ Sidebar (#quarto-sidebar) não encontrada!');
      return;
    }
    
    const isCurrentlyHidden = body.classList.contains('sidebar-hidden');
    console.log('📊 Estado atual: sidebar está', isCurrentlyHidden ? 'OCULTA' : 'VISÍVEL');
    
    if (isCurrentlyHidden) {
      // Mostrar sidebar
      console.log('👁️ Mostrando sidebar...');
      body.classList.remove('sidebar-hidden');
      sidebar.style.display = '';
      sidebar.style.transform = '';
      sidebar.style.opacity = '';
      sidebar.style.visibility = '';
      sidebar.style.pointerEvents = '';
      localStorage.setItem('sidebarHidden', 'false');
      updateToggleIcon(false);
    } else {
      // Esconder sidebar
      console.log('🙈 Escondendo sidebar...');
      body.classList.add('sidebar-hidden');
      sidebar.style.display = 'none';
      sidebar.style.transform = 'translateX(-100%)';
      sidebar.style.opacity = '0';
      sidebar.style.visibility = 'hidden';
      sidebar.style.pointerEvents = 'none';
      localStorage.setItem('sidebarHidden', 'true');
      updateToggleIcon(true);
    }
    
    console.log('✅ Toggle concluído. Novo estado:', body.classList.contains('sidebar-hidden') ? 'OCULTA' : 'VISÍVEL');
  }
  
  // Função para atualizar o ícone do botão
  function updateToggleIcon(isHidden) {
    const toggleBtn = document.querySelector('#sidebar-toggle-navbar');
    if (!toggleBtn) return;
    
    // Limpar conteúdo atual
    toggleBtn.innerHTML = '';
    
    if (isHidden) {
      // Menu recolhido: mostrar "Menu" + ícone chevron-right
      const textSpan = document.createElement('span');
      textSpan.textContent = 'Menu';
      textSpan.style.marginRight = '0.5rem';
      textSpan.style.fontWeight = '500';
      
      const icon = document.createElement('i');
      icon.className = 'bi bi-chevron-right';
      
      toggleBtn.appendChild(textSpan);
      toggleBtn.appendChild(icon);
      toggleBtn.setAttribute('aria-label', 'Mostrar Menu Lateral');
      toggleBtn.setAttribute('title', 'Mostrar Menu Lateral');
    } else {
      // Menu visível: mostrar apenas ícone de lista
      const icon = document.createElement('i');
      icon.className = 'bi bi-list';
      
      toggleBtn.appendChild(icon);
      toggleBtn.setAttribute('aria-label', 'Ocultar Menu Lateral');
      toggleBtn.setAttribute('title', 'Ocultar Menu Lateral');
    }
  }
  
  // Função para restaurar o estado da sidebar
  function restoreSidebarState() {
    const isHidden = localStorage.getItem('sidebarHidden') === 'true';
    const sidebar = document.querySelector('#quarto-sidebar');
    
    console.log('🔄 Restaurando estado da sidebar:', isHidden ? 'OCULTA' : 'VISÍVEL');
    
    if (isHidden && sidebar) {
      document.body.classList.add('sidebar-hidden');
      sidebar.style.display = 'none';
      sidebar.style.transform = 'translateX(-100%)';
      sidebar.style.opacity = '0';
      sidebar.style.visibility = 'hidden';
      sidebar.style.pointerEvents = 'none';
      updateToggleIcon(true);
    } else {
      document.body.classList.remove('sidebar-hidden');
      if (sidebar) {
        sidebar.style.display = '';
        sidebar.style.transform = '';
        sidebar.style.opacity = '';
        sidebar.style.visibility = '';
        sidebar.style.pointerEvents = '';
      }
      updateToggleIcon(false);
    }
  }
  
  // Função para criar o botão de toggle na navbar
  function createToggleButton() {
    console.log('🔨 Criando botão de toggle...');
    
    // Verificar se o botão já existe
    if (document.querySelector('#sidebar-toggle-navbar')) {
      console.log('ℹ️ Botão já existe');
      return document.querySelector('#sidebar-toggle-navbar');
    }
    
    // Encontrar a navbar
    const navbar = document.querySelector('.navbar-nav');
    if (!navbar) {
      console.error('❌ Navbar (.navbar-nav) não encontrada!');
      return null;
    }
    
    // Criar o item de navegação
    const navItem = document.createElement('li');
    navItem.className = 'nav-item compact';
    
    // Criar o link/botão
    const navLink = document.createElement('a');
    navLink.className = 'nav-link';
    navLink.id = 'sidebar-toggle-navbar';
    navLink.href = 'javascript:void(0);';
    navLink.setAttribute('role', 'button');
    navLink.setAttribute('aria-label', 'Ocultar Menu Lateral');
    navLink.setAttribute('title', 'Ocultar Menu Lateral');
    navLink.setAttribute('tabindex', '0');
    
    // Criar o ícone
    const icon = document.createElement('i');
    icon.className = 'bi bi-list';
    
    // Montar a estrutura
    navLink.appendChild(icon);
    navItem.appendChild(navLink);
    
    // Inserir no início da navbar (lado esquerdo)
    navbar.insertBefore(navItem, navbar.firstChild);
    
    console.log('✅ Botão criado com sucesso');
    return navLink;
  }
  
  // Função para anexar eventos ao botão
  function attachEvents() {
    const toggleBtn = document.querySelector('#sidebar-toggle-navbar');
    
    if (!toggleBtn) {
      console.error('❌ Botão de toggle não encontrado para anexar eventos');
      return false;
    }
    
    console.log('🔗 Anexando eventos ao botão...');
    
    // Remover eventos anteriores (se houver) clonando o elemento
    const newToggleBtn = toggleBtn.cloneNode(true);
    toggleBtn.parentNode.replaceChild(newToggleBtn, toggleBtn);
    
    // Adicionar evento de clique
    newToggleBtn.addEventListener('click', function(e) {
      console.log('🖱️ Clique detectado no botão!');
      e.preventDefault();
      e.stopPropagation();
      toggleSidebar();
    });
    
    // Adicionar suporte para teclado
    newToggleBtn.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        console.log('⌨️ Tecla detectada:', e.key);
        e.preventDefault();
        toggleSidebar();
      }
    });
    
    console.log('✅ Eventos anexados com sucesso');
    return true;
  }
  
  // Função de inicialização
  function init() {
    console.log('🚀 Inicializando sidebar toggle...');
    
    // Verificar se existe uma sidebar
    const sidebar = document.querySelector('#quarto-sidebar');
    if (!sidebar) {
      console.warn('⚠️ Sidebar não encontrada, tentando novamente...');
      return false;
    }
    
    console.log('✅ Sidebar encontrada:', sidebar);
    
    // Criar ou encontrar o botão
    let toggleBtn = document.querySelector('#sidebar-toggle-navbar');
    if (!toggleBtn) {
      toggleBtn = createToggleButton();
    }
    
    if (!toggleBtn) {
      console.error('❌ Falha ao criar botão de toggle');
      return false;
    }
    
    // Anexar eventos
    const success = attachEvents();
    
    if (success) {
      // Restaurar estado anterior
      restoreSidebarState();
      console.log('🎉 Sidebar toggle inicializado com sucesso!');
      return true;
    }
    
    return false;
  }
  
  // Tentar inicializar múltiplas vezes
  let attempts = 0;
  const maxAttempts = 10;
  
  function tryInit() {
    attempts++;
    console.log(`🔄 Tentativa ${attempts}/${maxAttempts}`);
    
    if (init()) {
      console.log('✅ Inicialização bem-sucedida!');
      return;
    }
    
    if (attempts < maxAttempts) {
      setTimeout(tryInit, 200);
    } else {
      console.error('❌ Falha ao inicializar após', maxAttempts, 'tentativas');
    }
  }
  
  // Executar quando o documento estiver carregado
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryInit);
  } else {
    tryInit();
  }
  
  // Também executar após o window.load
  window.addEventListener('load', function() {
    setTimeout(function() {
      if (!document.querySelector('#sidebar-toggle-navbar')) {
        console.log('🔄 Tentando inicializar após window.load...');
        tryInit();
      }
    }, 100);
  });
  
  // Atalho de teclado: Ctrl+B ou Cmd+B para toggle
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
      console.log('⌨️ Atalho Ctrl+B detectado');
      e.preventDefault();
      toggleSidebar();
    }
  });
  
  // Expor função globalmente para debug
  window.debugSidebarToggle = function() {
    console.log('=== DEBUG SIDEBAR TOGGLE ===');
    console.log('Sidebar:', document.querySelector('#quarto-sidebar'));
    console.log('Botão:', document.querySelector('#sidebar-toggle-navbar'));
    console.log('Body classes:', document.body.className);
    console.log('LocalStorage:', localStorage.getItem('sidebarHidden'));
    
    const btn = document.querySelector('#sidebar-toggle-navbar');
    if (btn) {
      console.log('Botão tem evento onclick?', btn.onclick !== null);
      console.log('Testando clique...');
      btn.click();
    }
  };
  
  console.log('💡 Dica: Execute window.debugSidebarToggle() no console para debug');
  
})();
