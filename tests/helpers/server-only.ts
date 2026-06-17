// Stub de `server-only` para los tests.
//
// Los módulos servidor (`src/lib/{db,email,stripe,blog,rate-limit}.ts` y los
// Route Handlers que los importan) hacen `import "server-only"`, que LANZA al
// cargarse fuera de un entorno RSC. Vitest aliasa `server-only` a este módulo
// vacío (ver `vitest.config.ts`) para poder importar y testear esa lógica en
// los proyectos `node` (unit/integration) sin tocar el código de producción.
export {};
