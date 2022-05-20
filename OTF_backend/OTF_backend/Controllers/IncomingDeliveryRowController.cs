using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OTF_backend.Models.Outbound.IncomingDeliveryRows;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IncomingDeliveryRowController : ControllerBase
    {
        private readonly IIncomingDeliveryRowsRepository _incomingDeliveryRowsRepository;

        public IncomingDeliveryRowController(IIncomingDeliveryRowsRepository incomingDeliveryRowsRepository)
        {
            _incomingDeliveryRowsRepository = incomingDeliveryRowsRepository;
        }

        [HttpGet("{incomingDeliveryId}")]
        public async Task<ActionResult<IncomingDeliveryRows[]>> Get(int incomingDeliveryId)
        {
            try
            {
                var results = await _incomingDeliveryRowsRepository.GetIncomingDeliveryRowsById(incomingDeliveryId);

                return results;
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }

        [HttpPost("create")]
        public async Task<ActionResult<IncomingDeliveryRows>> Post(IncomingDeliveryRows incomingDeliveryRows)
        {
            try
            {
                _incomingDeliveryRowsRepository.CreateIncomingDeliveryRow(incomingDeliveryRows);

                return Ok(new
                {
                    IncomingDeliveryRowId = incomingDeliveryRows.IncomingDeliveryRowId,
                    IncomingDeliveryId = incomingDeliveryRows.IncomingDeliveryId,
                    ArticleNumber = incomingDeliveryRows.ArticleNumber,
                    ProductId = incomingDeliveryRows.ProductId,
                    OrderedAmount = incomingDeliveryRows.OrderedAmount,
                    RecievedAmount = incomingDeliveryRows.RecievedAmount,
                    Handled = incomingDeliveryRows.Handled
                });
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
