package blognitum_test

import (
	"testing"

	keepertest "blognitum/testutil/keeper"
	"blognitum/testutil/nullify"
	"blognitum/x/blognitum"
	"blognitum/x/blognitum/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.BlognitumKeeper(t)
	blognitum.InitGenesis(ctx, *k, genesisState)
	got := blognitum.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
