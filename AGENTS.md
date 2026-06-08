# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v54.0.0/ before writing any code.

# AGENTS.md

## Proyecto

Aplicación móvil desarrollada con React Native utilizando Expo y TypeScript.

## Stack Tecnológico

- React Native
- Expo SDK 54
- TypeScript
- NativeWind (Tailwind CSS para React Native)
- Zustand para manejo de estado global

## Principios Generales

- Priorizar soluciones simples y mantenibles.
- Evitar la sobreingeniería.
- Explicar decisiones técnicas importantes cuando se propongan cambios.
- Favorecer la reutilización de componentes.
- Mantener una arquitectura escalable y fácil de entender.

## TypeScript

- Utilizar TypeScript estricto.
- Evitar el uso de `any`.
- Preferir tipos e interfaces explícitas.
- Mantener tipados los props, estados y respuestas de APIs.

## React Native

- Utilizar componentes funcionales exclusivamente.
- Utilizar hooks antes que componentes de clase.
- Mantener los componentes pequeños y con una única responsabilidad.
- Evitar lógica compleja dentro del JSX.

## Estado Global

- Utilizar Zustand para estado global.
- Utilizar `useState` para estados locales.
- No almacenar estados temporales o derivados en Zustand.
- Mantener stores pequeños y enfocados en una única responsabilidad.

## Estilos

- Utilizar NativeWind para estilos siempre que sea posible.
- Evitar StyleSheet salvo que sea necesario por rendimiento o compatibilidad.
- Evitar estilos inline extensos.
- Mantener consistencia visual en toda la aplicación.

## Paleta de Colores

```ts
export const COLORS = {
  primary: "#4F7942",
  secondary: "#E19D38",
  background: "#FBF6D8",
  surface: "#FEFEFE",
  text: "#333333",
} as const;
```

### Reglas

- Utilizar únicamente colores definidos en la paleta.
- Evitar hardcodear colores directamente en los componentes.
- Centralizar los colores en `src/constants/colors.ts`.

## Estructura del Proyecto

```text
src/
├── components/
├── screens/
├── navigation/
├── store/
├── hooks/
├── services/
├── types/
├── utils/
├── constants/
└── assets/
```

## Componentes

- Utilizar PascalCase para nombres de componentes.
- Crear componentes reutilizables cuando exista duplicación.
- Mantener separados componentes de presentación y lógica cuando sea necesario.

## Hooks

- Nombrar hooks personalizados con prefijo `use`.
- Colocar hooks reutilizables dentro de `src/hooks`.

## APIs y Servicios

- Centralizar llamadas HTTP en `src/services`.
- No realizar llamadas a APIs directamente desde componentes.
- Separar lógica de negocio de la UI.

## Organización de Archivos

- Un componente por archivo.
- Mantener archivos pequeños y enfocados.
- Evitar archivos excesivamente largos.

## Convenciones

### Nombres

- Componentes: PascalCase
- Hooks: camelCase iniciando con `use`
- Variables y funciones: camelCase
- Constantes globales: UPPER_SNAKE_CASE

### Imports

- Ordenar imports por:
  1. Librerías externas
  2. Componentes
  3. Hooks
  4. Servicios
  5. Utilidades
  6. Tipos

## Testing

- No implementar testing por el momento salvo que sea solicitado.

## Aprendizaje

Al generar código o sugerencias:

- Priorizar soluciones aptas para aprendizaje.
- Explicar conceptos importantes.
- Mostrar alternativas cuando existan diferentes enfoques.
- Evitar patrones avanzados innecesarios.
- Favorecer buenas prácticas modernas de React Native y TypeScript.
