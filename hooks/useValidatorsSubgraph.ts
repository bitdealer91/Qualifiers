"use client";
import { useEffect, useMemo, useState } from 'react';
import { gql } from 'graphql-request';
import { getSubgraphClient } from '@/lib/subgraph';

// Attempt a generic validators query; if schema differs, we'll safely fail and return empty
const VALIDATORS_QUERY = gql`
  query Validators($first: Int!, $skip: Int!) {
    validators(first: $first, skip: $skip, orderBy: totalStaked, orderDirection: desc) {
      id
      totalStaked
      delegationRate
      earnings
    }
  }
`;

export interface SubgraphValidatorRaw {
  id: string; // address
  totalStaked?: string; // wei string
  delegationRate?: string; // maybe percent or bps
  earnings?: string; // wei string
}

export function useValidatorsSubgraph(first: number = 100, skip: number = 0) {
  const [validators, setValidators] = useState<SubgraphValidatorRaw[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const client = getSubgraphClient();
        const data = await client.request<any>(VALIDATORS_QUERY, { first, skip });
        if (!active) return;
        const list = (data?.validators || []) as SubgraphValidatorRaw[];
        setValidators(list);
      } catch (e: any) {
        if (!active) return;
        // Swallow schema errors gracefully
        setError(e?.message || 'Subgraph query failed');
        setValidators([]);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, [first, skip]);

  return { validators, loading, error };
}




