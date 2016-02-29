# micro-www
Front end nodejs micro service. Communicates with micro-api.

# Environmental variables (optional):
- WWW_PORT: Port used for app (default:80)
- API_URL: URL for micro-api. include the full port
- LOG_LEVEL: Specifies log level for winston console (silly, debug, verbose, info, warn, error). This micro service uses info and error messages only.
- SHUD_LOG_TO_FILE: true or false, specifies whether to save logs to logs.log
