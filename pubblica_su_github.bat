@echo off
chcp 65001 > nul
title Pubblica Portale su GitHub Pages
color 0A
cd /d "%~dp0"

echo ======================================================================
echo   PUBBLICAZIONE PORTALE EDOARDO TUBIA SU GITHUB
echo ======================================================================
echo.

git push -u origin main
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ======================================================================
    echo   SUCCESSO! Il Portale e' stato caricato su GitHub!
    echo ======================================================================
) else (
    echo.
    echo Assicurati di aver prima creato il repository vuoto su:
    echo https://github.com/new (chiamato: portale)
)
echo.
pause
