var characterReplacement = function(s, k) {
    const map = {};
	let max = 0;
	let maxCount = 0; 

	

    for (let start = 0, end = 0; end < s.length; end++) {
		map[s[end]] = (map[s[end]] || 0) + 1;
		max = Math.max(max, map[s[end]]);
		if (end - start + 1 - max > k) map[s[start++]]--;
		maxCount = Math.max(maxCount, end - start + 1);
	}
	return maxCount;
};

/// time O(n)
/// space O(n)