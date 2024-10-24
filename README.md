# NestJS OpenAI API

Este proyecto es una API REST construida con NestJS que integra OpenAI para procesar prompts y devolver respuestas.

## Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn
- Una cuenta de OpenAI y API Key

## Configuración del Entorno

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
cd nestjs-openai-api
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto:
```env
OPENAI_API_KEY=tu_api_key_aqui
PORT=3000
MAX_PROMPT_LENGTH=500
RATE_LIMIT_TTL=60
RATE_LIMIT_MAX=100
```

## Estructura del Proyecto

```
src/
├── main.ts
├── app.module.ts
├── ai/
│   ├── ai.module.ts
│   ├── ai.controller.ts
│   ├── ai.service.ts
│   └── dto/
│       ├── prompt.dto.ts
│       └── response.dto.ts
├── common/
│   ├── middleware/
│   │   └── rate-limiter.middleware.ts
│   └── validators/
│       └── prompt.validator.ts
└── config/
    └── configuration.ts
```

## Instalación de Dependencias

```bash
npm install 
```

## Ejecutar la Aplicación

```bash
# Desarrollo
npm start
```

## Uso de la API

### Endpoint Principal

`POST /ai/prompt`

#### Request Body:
```json
{
  "prompt": "Explica la teoría de la relatividad"
}
```

#### Response:
```json
{
  "prompt": "Explica la teoría de la relatividad",
  "response": "La teoría de la relatividad se refiere a dos teorías interrelacionadas..."
}
```

## Características Implementadas

- ✅ Validación de requests
- ✅ Rate limiting
- ✅ Logging de requests y responses
- ✅ Documentación con Swagger

## Documentación API

La documentación Swagger está disponible en:
```
http://localhost:3000/api/docs
```


## Limitaciones y Consideraciones

- Rate Limiting: 100 requests por minuto por IP
- Longitud máxima del prompt: 500 caracteres
- Timeout de la API: 30 segundos



