initSidebarItems({"enum":[["LengthHint","Expected amount of time that an input should last."]],"fn":[["apply_length_hint","Modify the given cache configuration to initially allocate enough bytes to store a length of audio at the given bitrate."],["compressed_cost_per_sec","Estimates the cost, in B/s, of audio data compressed at the given bitrate."],["default_config","Provides the default config used by a cached source."],["raw_cost_per_sec","Calculates the cost, in B/s, of raw floating-point audio data."]],"struct":[["Compressed","A wrapper around an existing `Input` which compresses the input using the Opus codec before storing it in memory."],["Memory","A wrapper around an existing `Input` which caches the decoded and converted audio data locally in memory."],["OpusCompressor","Transform applied inside `Compressed`, converting a floating-point PCM input stream into a DCA-framed Opus stream."]]});