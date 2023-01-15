package keeper_test

import (
	"testing"

	testkeeper "blognitum/testutil/keeper"
	"blognitum/x/blognitum/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.BlognitumKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
