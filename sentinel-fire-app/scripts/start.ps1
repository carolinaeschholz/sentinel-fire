# Caminho do Node.js extraído (.zip)
$nodePath = "C:\Users\f71009c\OneDrive - CNH Industrial\Documentos\Projetos\node-v22.16.0-win-x64"
$nodeExe = "$nodePath\node.exe"

# Adiciona o Node ao PATH temporariamente
$env:Path = "$nodePath;$env:Path"

# Caminho do projeto
$projectPath = "C:\Users\f71009c\OneDrive - CNH Industrial\Documentos\Projetos\sentinel-fire\sentinel-fire-app"

# Vai para a pasta do projeto
Set-Location -Path $projectPath

# Exibe versões do Node e NPM
Write-Host "Node version: $(& $nodeExe -v)"
Write-Host "NPM version: $(cmd /c npm -v)"

# Verifica se package.json existe
if (Test-Path "package.json") {
    Write-Host "Instalando dependencias do projeto..."
    cmd /c npm install
} else {
    Write-Host "Arquivo package.json nao encontrado."
    exit
}

# Instala @tsconfig/react-native se necessário
if (!(Test-Path "node_modules/@tsconfig/react-native")) {
    Write-Host "Instalando @tsconfig/react-native..."
    cmd /c npm install --save-dev @tsconfig/react-native
} else {
    Write-Host "@tsconfig/react-native ja instalado."
}

# Verifica se o Expo está instalado localmente
if (Test-Path "node_modules/expo") {
    Write-Host "Iniciando servidor Expo localmente (modo LAN)..."
    cmd /c node_modules\.bin\expo.cmd start --lan -c
} else {
    Write-Host "Pacote 'expo' nao encontrado no projeto."
    Write-Host 'Instale com: cmd /c npm install expo'
}


