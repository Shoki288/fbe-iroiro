#!/bin/bash
  VOICEVOX_URL="http://127.0.0.1:50021"
  SPEAKER_ID=2
  MESSAGE="$1"

  if ! curl -s "${VOICEVOX_URL}/version" >/dev/null 2>&1; then
      exit 0  # VOICEVOXが起動していない場合は静かに終了
  fi

  TEMP_FILE=$(mktemp /tmp/claude_voice_XXXXXX.wav)
  trap "rm -f $TEMP_FILE" EXIT

  if curl -s -X POST "${VOICEVOX_URL}/audio_query?speaker=${SPEAKER_ID}" \
      --get --data-urlencode "text=${MESSAGE}" | \
     curl -s -X POST -H "Content-Type: application/json" -d @- \
      "${VOICEVOX_URL}/synthesis?speaker=${SPEAKER_ID}" -o "$TEMP_FILE" 2>/dev/null; then
      afplay "$TEMP_FILE" 2>/dev/null
  fi