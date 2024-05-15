function executeCode() {
    const terminal = document.getElementById('terminal');
    const terminalContent = document.getElementById('terminal-content');
    terminalContent.textContent = 
        'javac Aniversario.java\n' +
        'java Aniversario\n\n' +
        'Data: 31 de Maio de 2024\n' +
        'Hora: 19:00\n' +
        'Local: Minha Casa, Rua Hans Sattler, 75\n' +
        'Você está convidado para o meu aniversário!';
    terminal.classList.remove('hidden');
}

function closeTerminal() {
    const terminal = document.getElementById('terminal');
    terminal.classList.add('hidden');
}

function acceptInvitation() {
    const whatsappUrl = "https://wa.me/5547996047958?text=Pode%20me%20confirmar%20no%20seu%20aniversário";
    window.open(whatsappUrl, "_blank");
}
