using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OTF_backend.Models.Stock;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StockLocationController : ControllerBase
    {
        private readonly IStockLocationRepository _stockLocationRepository;

        public StockLocationController(IStockLocationRepository stockLocationRepository)
        {
            _stockLocationRepository = stockLocationRepository;
        }

        [HttpGet]
        public async Task<ActionResult<StockLocation[]>> Get()
        {
            try
            {
                var results = await _stockLocationRepository.GetAllStockLocations();

                return results;
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }
    }
}
