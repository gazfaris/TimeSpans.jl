var documenterSearchIndex = {"docs":
[{"location":"#API-Documentation-1","page":"API Documentation","title":"API Documentation","text":"","category":"section"},{"location":"#","page":"API Documentation","title":"API Documentation","text":"CurrentModule = TimeSpans","category":"page"},{"location":"#","page":"API Documentation","title":"API Documentation","text":"TimeSpan\nstart\nstop\nTimeSpans.contains\nTimeSpans.overlaps\nTimeSpans.shortest_timespan_containing\nTimeSpans.duration\nTimeSpans.time_from_index\nTimeSpans.index_from_time","category":"page"},{"location":"#TimeSpans.TimeSpan","page":"API Documentation","title":"TimeSpans.TimeSpan","text":"TimeSpan(start, stop)\n\nReturn TimeSpan(Nanosecond(start), Nanosecond(stop)) representing the interval [start, stop).\n\nIf start == stop, a single Nanosecond is added to stop since stop is an exclusive upper bound and TimeSpan operations only generally support up to nanosecond precision anyway.\n\nThe benefit of this type over e.g. Nanosecond(start):Nanosecond(1):Nanosecond(stop) is that instances of this type are guaranteed to obey TimeSpans.start(x) < TimeSpans.stop(x) by construction.\n\n\n\n\n\n","category":"type"},{"location":"#TimeSpans.start","page":"API Documentation","title":"TimeSpans.start","text":"start(span)\n\nReturn the inclusive lower bound of span as a Nanosecond value.\n\n\n\n\n\n","category":"function"},{"location":"#TimeSpans.stop","page":"API Documentation","title":"TimeSpans.stop","text":"stop(span)\n\nReturn the exclusive upper bound of span as a Nanosecond value.\n\n\n\n\n\n","category":"function"},{"location":"#TimeSpans.contains","page":"API Documentation","title":"TimeSpans.contains","text":"TimeSpans.contains(a, b)\n\nReturn true if the timespan b lies entirely within the timespan a, return false otherwise.\n\n\n\n\n\n","category":"function"},{"location":"#TimeSpans.overlaps","page":"API Documentation","title":"TimeSpans.overlaps","text":"TimeSpans.overlaps(a, b)\n\nReturn true if the timespan a and the timespan b overlap, return false otherwise.\n\n\n\n\n\n","category":"function"},{"location":"#TimeSpans.shortest_timespan_containing","page":"API Documentation","title":"TimeSpans.shortest_timespan_containing","text":"TimeSpans.shortest_timespan_containing(spans)\n\nReturn the shortest possible TimeSpan containing all timespans in spans.\n\nspans is assumed to be an iterable of timespans.\n\n\n\n\n\n","category":"function"},{"location":"#TimeSpans.duration","page":"API Documentation","title":"TimeSpans.duration","text":"TimeSpans.duration(span)\n\nReturn stop(span) - start(span).\n\n\n\n\n\n","category":"function"},{"location":"#TimeSpans.time_from_index","page":"API Documentation","title":"TimeSpans.time_from_index","text":"TimeSpans.time_from_index(sample_rate, sample_index)\n\nGiven sample_rate in Hz and assuming sample_index > 0, return the earliest Nanosecond containing sample_index.\n\nExamples:\n\njulia> TimeSpans.time_from_index(1, 1)\n0 nanoseconds\n\njulia> TimeSpans.time_from_index(1, 2)\n1000000000 nanoseconds\n\njulia> TimeSpans.time_from_index(100, 100)\n990000000 nanoseconds\n\njulia> TimeSpans.time_from_index(100, 101)\n1000000000 nanoseconds\n\n\n\n\n\nTimeSpans.time_from_index(sample_rate, sample_range::AbstractUnitRange)\n\nReturn the TimeSpan corresponding to sample_range given sample_rate in Hz:\n\njulia> TimeSpans.time_from_index(100, 1:100)\nTimeSpan(0 nanoseconds, 1000000000 nanoseconds)\n\njulia> TimeSpans.time_from_index(100, 101:101)\nTimeSpan(1000000000 nanoseconds, 1000000001 nanoseconds)\n\njulia> TimeSpans.time_from_index(100, 301:600)\nTimeSpan(3000000000 nanoseconds, 6000000000 nanoseconds)\n\n\n\n\n\n","category":"function"},{"location":"#TimeSpans.index_from_time","page":"API Documentation","title":"TimeSpans.index_from_time","text":"TimeSpans.index_from_time(sample_rate, sample_time::Period)\n\nGiven sample_rate in Hz, return the integer index of the most recent sample taken at sample_time. Note that sample_time must be non-negative and support convert(Nanosecond, sample_time).\n\nExamples:\n\njulia> TimeSpans.index_from_time(1, Second(0))\n1\n\njulia> TimeSpans.index_from_time(1, Second(1))\n2\n\njulia> TimeSpans.index_from_time(100, Millisecond(999))\n100\n\njulia> TimeSpans.index_from_time(100, Millisecond(1000))\n101\n\n\n\n\n\nTimeSpans.index_from_time(sample_rate, span)\n\nReturn the UnitRange of indices corresponding to span given sample_rate in Hz:\n\njulia> TimeSpans.index_from_time(100, TimeSpan(Second(0), Second(1)))\n1:100\n\njulia> TimeSpans.index_from_time(100, TimeSpan(Second(1)))\n101:101\n\njulia> TimeSpans.index_from_time(100, TimeSpan(Second(3), Second(6)))\n301:600\n\n\n\n\n\n","category":"function"}]
}
